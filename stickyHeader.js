$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".mainHeader").addClass("sticky");
        }
        else {
            $(".mainHeader").removeClass("sticky");
        }
    })

})