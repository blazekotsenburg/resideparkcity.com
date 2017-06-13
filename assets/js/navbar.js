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

function updateMaxPrices(minPriceInput) {
    var quarterK = 25000;
    var quarterM = 250000;

    //need to check for M or K and then increment properly
    //noticed incrementing was not working correctly
    if (metricPattern.test(minPriceInput)) {

        var valAtMin = $("#min-input").val();

        if(valAtMin.charAt(valAtMin.length - 1) ==="k" ||
            valAtMin.charAt(valAtMin.length - 1) ==="K") {

            // Consider extracting as a helper method
            $(".price").each(function () {
                var valToInt = parseInt($("#min-input").val(), 10) * 1000;
                $(this).text("$" + (valToInt + quarterK));
                quarterK += quarterK;
            });
        }

        else {
            // need to check on how many numbers exist in the input before knowing
            // how much each price needs to be multiplied by in line 84.
            $(".price").each(function () {
                var valToInt = parseInt($("#min-input").val(), 10) * 1000000;
                $(this).text("$" + (valToInt + quarterM));
                quarterM += quarterM;
            });

        }

    }

    // check that this is both necesary and working.
    else if (intWithCommaPattern.test(minPriceInput)) {
        $(".price").each(function () {
            var valToInt = parseInt($("#min-input").val(), 10);
            $(this).text("$" + (valToInt + quarterM));
            quarterM += quarterM;
        });
    }

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