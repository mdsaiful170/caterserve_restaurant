
(function ($) {
    "use strict";


    // ---lightGallery active code--
    lightGallery(document.getElementById('static-thumbnails'), {
        animateThumb: true,
        zoomFromOrigin: true,
        allowMediaOverlap: true,
        toggleThumb: true,
    });


    // --wow active code
    new WOW().init();

    // =============aos link code 
    AOS.init({
        duration: 800,
        offset: 150,
    });






    //counter up active code

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // ================winde backto up code 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.backToup').fadeIn('slow');
        } else {
            $('.backToup').fadeOut('slow');
        }
    });
    $('.backToup').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 700, 'easeInExpo');
        return false;
    });



    // ====type text code active-------
    var typed = new Typed('.type-text', {
        strings: ['for your dream event', 'for your birthday event', 'for your any event orgonaized', 'for your dream fastibale'],
        loop: true,
        typeSpeed: 150
    });


    // ----owl carousel--section---

    $(document).ready(function () {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            // autoplay: true,
            // slideTransition: 'linear',
            center: true,
            autoplay: {
                delay: 1000,
                disableOninteraction: false
            },
            responsive: {
                0: {
                    items: 1
                },
                575: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        })
    });
    $(document).ready(function () {
        $('.testimonial-carousel-2').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            // autoplay: true,

            // dots: false,
            rtl: true,
            center: true,
            autoplay: {
                delay: 1000,
                disableOninteraction: false
            },
            responsive: {
                0: {
                    items: 1
                },
                575: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        })
    });




})(jQuery);