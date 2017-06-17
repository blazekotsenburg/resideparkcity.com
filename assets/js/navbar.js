/**
 * Created by blazekotsenburg on 6/5/17.
 *
 * This file handles all of the necessary interactivity needed for the navigation bar outside of
 * the Bootstrap/Jquery library.
 */
var minPrices = [
    50000,
    100000,
    150000,
    200000,
    250000,
    300000,
    400000,
    500000
];

var metricPattern = /^\d{1,3}[mMkK]$/; // Pattern allows for m and k multipliers (eg 40k -> 40,000)
var intWithCommaPattern = /^\d{1,3}(,\d{3})*?$/; //Pattern allows commas (eg 700,000 matches)

/**
 * This event listener makes sure that the price column is shifted to the right whenever the
 * max input has been put in focus. The prices will be adjusted depending on whether the min
 * input has a value or not.
 */
$("#max-input").on("focus", function () { //need to extract this method out so that it can be used for more than on click/focus. (priceoptions li listener)
    $("#price-options").addClass("shift-col-right");
    $("#min-input").removeClass("input-toggle");


    if (!$("#min-input").val()) {
        defaultMaxPriceOptions();
    }

    else if ($.isNumeric($("#min-input").val())) {

        if ($("#min-input").val().length >= 7){

            getMaxPriceOptions(250000, 1);
        }

        else {

            getMaxPriceOptions(25000, 1);
        }
    }

    else {

        updateMaxPrices($("#min-input").val());
    }
});

/**
 * When min input in Price dropdown is selected, shift all price options to the left of the
 * dropdown column.
 */
$("#min-input").on("focus", function () {

    $("#price-options").removeClass("shift-col-right");
    $("#max-input").removeClass("input-toggle");
    fillMinPriceCol();
});


/**
 * Listener that prevents dropdowns from closing after a sub-item in the dropdown list has been
 * clicked.
 */
$(".dropdown-content li").on("click", function (e) {
    e.stopPropagation();
});

//This listener needs a lot of work. Doesn't toggle properly. It includes any mouse clicks outside of the
//dropdown button.
$("#price-dropdown-button").on("click", function () {
    $("#min-input").addClass("input-toggle");
    $("#max-input").removeClass("input-toggle");
    fillMinPriceCol();
    $("#price-options").removeClass("shift-col-right");
});

// For now, this listener puts the values up into the inputs.  However, the input and col.
// must be focused and shifted accordingly if min-input is selecetd.
$("#price-options li").on("click", function () {
    var listItemVal = $(this).text();
    if ($("#price-options").hasClass("shift-col-right")) {
        $("#max-input").val(listItemVal.replace(/[$]+/, '')); //Places just the numbers and commas into the input with regexp
    }
    else {
        $("#min-input").val(listItemVal.replace(/[$+]+/g, ''));
        $("#min-input").removeClass("input-toggle");
        $("#price-options").addClass("shift-col-right");
        $("#max-input").addClass("input-toggle");
        updateMaxPrices($("#min-input").val());
    }
});

/**
 * This method is used to determine what prices will be displayed on the price list after the
 * max-input has been put into focus.  It allows for a user to use commas in their input as well
 * as multipliers such as 40k = 40,000 and 10m= 10,000,000.
 *
 * @param minPriceInput - The value that is held in min-input
 */
function updateMaxPrices(minPriceInput) {

    var quarterK = 25000;
    var quarterM = 250000;

    // If a user inputs a metric multiplier, eg 40k, handle price options accordingly
    if (metricPattern.test(minPriceInput)) {

        var valAtMin = $("#min-input").val();

        if (valAtMin.charAt(valAtMin.length - 1) === "k" ||
            valAtMin.charAt(valAtMin.length - 1) === "K") {

            getMaxPriceOptions(quarterK, 1000);
        }

        else {

            getMaxPriceOptions(quarterM, 1000000);
        }
    }

    // If a user inputs integer with comma, eg 1,000,000 , handle price options accordingly
    else if (intWithCommaPattern.test(minPriceInput)) {

        if ($("#min-input").val().replace(/,/g, '').length >= 7) {

            var tempM = quarterM;

            $(".price").each(function () {
                var valToInt = parseInt($("#min-input").val().replace(/,/g, ''), 10);
                $(this).text("$" + (numberWithCommas(valToInt + tempM)));
                tempM += quarterM;
            });
        }

        else {

            var tempK = quarterK;

            $(".price").each(function () {
                var valToInt = parseInt($("#min-input").val().replace(/,/g, ''), 10);
                $(this).text("$" + (numberWithCommas(valToInt + tempK)));

                tempK += quarterK;
            });
        }
    }
    
     // Check here for invalid inputs, such as words and special characters.
    else {

        $("#min-input").val("");
        defaultMaxPriceOptions();
    }
}

/**
 * Helper method for updateMaxPrices method.  This method modifies the price options based
 * on whatever the min-input value was before max-input is focused.
 *
 * @param incrementBy - The integer value of how much each price option is increased by.
 * @param multiplier - Multiply min-input val by some power of 10.
 */
function getMaxPriceOptions(incrementBy ,multiplier) {

    var increasedBy = incrementBy;

    $(".price").each(function () {
        var valToInt = parseInt($("#min-input").val(), 10) * multiplier;
        $(this).text("$" + (numberWithCommas(valToInt + increasedBy)));
        increasedBy += incrementBy;
    });
}

/**
 * Method used any time that the prices need to be shifted back to the left column and displayed correctly.
 */
function fillMinPriceCol() {
    var i = 0;
    $(".price").each(function () {
        $(this).text("$" + numberWithCommas(minPrices[i]) + "+");
        i++;
    });
}

/**
 * Gives any given number the proper formatting with commas.
 *
 * @param numberToConvert
 * @returns {string}
 */
function numberWithCommas(numberToConvert) {

    return numberToConvert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Function is called when the min-input doesn't contain a valid value or if no value has been input at all.
 */
function defaultMaxPriceOptions() {
    var i = 100000;
    $(".price").each(function () {
        $(this).text("$" + numberWithCommas(i));
        i += 100000;
    });
}

/*
$('#min-input').on('keypress', function (event) {

    //var key = event.charCode || event.which;

    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!(intWithCommaPattern.test(key) || metricPattern.test(key))) {
        event.preventDefault();
        return false;
    }
});*/