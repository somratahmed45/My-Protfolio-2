$(function() {

    $(window).scroll(function() {

        $scrolling = $(this).scrollTop();
        if ($scrolling > 200) {
            $(".navbar").addClass("bgcolor");
        } else {
            $(".navbar").removeClass("bgcolor");
        }

    });



});