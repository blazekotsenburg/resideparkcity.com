/**
 * Created by blazekotsenburg on 6/5/17.
 */

/**
 * When max input in Price dropdown is selected, shift all price options to the right of the
 * dropdown column.
 */
$("#max-input").on("click", function () {
    $("#price-options").addClass("shift-col-right");
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