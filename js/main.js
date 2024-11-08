$(document).ready(function () {
    AOS.init({
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        offset: 20, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down

    });



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


    $('.menubtn').click(function () {
        $('.mobmenu').addClass('active');
    });
    $('.closemenu').click(function () {
        $('.mobmenu').removeClass('active');
    });

    // attach file
    
    if ($('#attach').length) {
        document.getElementById('attach').addEventListener('change', function () {
            const fileName = this.files[0] ? this.files[0].name : 'File no more than 130 MB';
            document.querySelector('.filename').textContent = fileName;
        });
    }

    // slider
    if ($('.mnsl').length) {
        var swipert = new Swiper(".mnsl", {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            speed: 1000,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
           

            // breakpoints: {
            //     400: {
            //         slidesPerView: 1.4,
            //     },
            //     576: {
            //         slidesPerView: 1.5,
            //     },
            //     768: {
            //         slidesPerView: 1.1,
            //     },
            //     991: {
            //         slidesPerView: 1.8,
            //     },
            //     1500: {
            //         slidesPerView: 2.4,
            //     },

            // },
        });
    }

})