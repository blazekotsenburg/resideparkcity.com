/**
 * Created by blazekotsenburg on 6/5/17.
 */

/**
 * When max input in Price dropdown is selected, shift all price options to the right of the
 * dropdown column.
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
    }
});

/**
 * When min input in Price dropdown is selected, shift all price options to the left of the
 * dropdown column.
 */
$("#min-input").on("click", function () {
    $("#price-options").removeClass("shift-col-right");
});

$(".dropdown").on("mouse", function () {
    $(this).css({
       backgroundColor: "#080808"
    });
});