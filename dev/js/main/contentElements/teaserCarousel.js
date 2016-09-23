(function($) {
    'use strict';

    // document load event
    $(document).ready(function() {

        // initialize swiper when document ready
        // http://idangero.us/swiper/api/
        $('.js__teaser-carousel').each(function(){
            $(this).swiper({
                nextButton: $(this).parent().find('.js__teaser-carousel__btn-next'),
                prevButton: $(this).parent().find('.js__teaser-carousel__btn-prev'),
                pagination: '.js__teaser-carousel__pagination',
                paginationClickable: true,
                slidesPerView: 3,
                preloadImages: false,
                spaceBetween: 30,
                slideClass: 'elem',

                // Responsive breakpoints
                breakpoints: {

                    // when window width is <= 480px
                    500: {
                        slidesPerView: 1
                    },
                    // when window width is <= 992px
                    991: {
                        slidesPerView: 2
                    },
                    // when window width is <= 1199px
                    1199: {
                        slidesPerView: 3
                    }
                }
            });
        });
    });

})(jQuery);
