$(document).ready(function(){
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

     //   to top

     $(function () {
        $('.totop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        })

    });
})