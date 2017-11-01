(function () {
    var itemSlide = $('.card-slider-widget .container .item').length;
    var slide = 1;

    this.cardSlider = function () {
        $('.totals-slide').text(itemSlide);
        
        $('.btn-next-slider').on('click', function () {
            if (slide !== itemSlide ) {
                slide = slide + 1;
                nextSlider (slide);
                changeBackground();
            } else {
                slide = 1;
                nextSlider (slide);
                changeBackground();
            }
        });
    
        $('.btn-prev-slider').on('click', function () {
            if (slide > 1 ) {
                slide = slide - 1;
                prevSlider (slide);
                changeBackground();
            } else {
                slide = itemSlide;
                prevSlider (slide);
                changeBackground();
            }
        });

        changeBackground();
    };

    function nextSlider (slideNumber) {
        $('.card-slider-widget .container .item').removeClass('active');
        $('div[data-slider="'+slideNumber+'"]').fadeIn('300').addClass('active');
        if(slideNumber !== (itemSlide + 1)) {
            $('div[data-slider="'+ (slideNumber - 1) +'"]').hide();
            if (slideNumber == 1) {
                $('div[data-slider="'+ itemSlide +'"]').hide();
            }
        }
        $('.current-slide').text(slideNumber);
    }

    function prevSlider (slideNumber) {
        $('.card-slider-widget .container .item').removeClass('active');
        $('div[data-slider="'+slideNumber+'"]').fadeIn('300').addClass('active');
        if(slideNumber !== 0) {
            $('div[data-slider="'+ (slideNumber + 1) +'"]').hide();
            if (slideNumber == itemSlide) {
                $('div[data-slider="1"]').hide();
            }
        }
        $('.current-slide').text(slideNumber);
    }

    function changeBackground () {
        var getSlideBackground = $('.card-slider-widget .container .item.active').attr('data-background');
        $('body').css({
            background: getSlideBackground,
            'background-size': 'cover'
        });
    }

    cardSlider();
})();