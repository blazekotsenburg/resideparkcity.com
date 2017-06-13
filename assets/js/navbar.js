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

var metricPattern = /^\d*[mMkK]$/; // Pattern allows for m and k multipliers (eg 40k -> 40,000)
var intWithCommaPattern = /^\d{1,3}(,\d{3})*?$/; //Pattern allows commas (eg 700,000 mathces)

/**
 * This event listener makes sure that the price column is shifted to the right whenever the
 * max input has been put in focus. The prices will be adjusted depending on whether the min
 * input has a value or not.
 */
$("#max-input").on("click", function () {
    $("#price-options").addClass("shift-col-right");


    if (!$("#min-input").val()) {
        var i = 100000;
        $(".price").each(function () {
            $(this).text("$" + i);
            i += 100000;
        });
    }
    else {
        var j = 25000;

        if ($.isNumeric($("#min-input").val())) {
            $(".price").each(function () {
                var valToInt = parseInt($("#min-input").val(), 10);
                $(this).text("$" + (valToInt + j));
                j += 25000;
            })
        }

        else {
            /*
            * Allow for people to input letters (500k)..
            * check for commas.
            * */

            updateMaxPrices($("#min-input").val());
        }
    }
});

/**
 * This method is used to determine what prices will be displayed on the price list after the
 * max-input has been put into focus.  It allows for a user to use commas in their input as well
 * as multipliers such as 40k = 40,000 and 10m= 10,000,000.
 *
 * @param minPriceInput
 */
function updateMaxPrices(minPriceInput) {

    var quarterK = 25000;
    var quarterM = 250000;

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

    // check that this is both necesary and working.
    else if (intWithCommaPattern.test(minPriceInput)) {

        if ($("#min-input").val().replace(/,/g, '').length >= 7) {

            var tempM = quarterM;

            $(".price").each(function () {
                var valToInt = parseInt($("#min-input").val().replace(/,/g, ''), 10);
                $(this).text("$" + (valToInt + tempM));
                tempM += quarterM;
            });
        }

        else {

            var tempK = quarterK;

            $(".price").each(function () {
                var valToInt = parseInt($("#min-input").val().replace(/,/g, ''), 10);
                $(this).text("$" + (valToInt + tempK));
                tempK += quarterK;
            });
        }
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
        $(this).text("$" + (valToInt + increasedBy)); //Consider method that returns string value with commas
        increasedBy += incrementBy;
    });
}

/**
 * When min input in Price dropdown is selected, shift all price options to the left of the
 * dropdown column.
 */
$("#min-input").on("click", function () {
    $("#price-options").removeClass("shift-col-right");

    var i = 0;
    $(".price").each(function () {
        $(this).text("$" + minPrices[i] + "+");
        i++;
    });
});

$(".dropdown").on("mouse", function () {
    $(this).css({
       backgroundColor: "#080808"
    });
});