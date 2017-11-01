(function () {
    var itemSlide = $('.images-slider-widget .container .slider ul li');
    var itemLength = itemSlide.length;
    var itemHeight = itemSlide.find('img').height() + 'px';
    var slideIndex = 0;

    this.imagesSlider = function () {
        itemSlide.each(function (index, current) {
            var leftPercent = (100 * index) + '%';
            $(this).css({
                left: leftPercent
            });
        });
    
        $('.slider').css({
            height: itemHeight
        });
    
        $('.images-slider-widget .btn-next-slider').on('click', function () {
            if (slideIndex < (itemLength - 1)) {
                slideIndex = slideIndex + 1;
                slide(slideIndex);
            } else {
                slideIndex = 0;
                slide(slideIndex);
            }
        });
    
        $('.images-slider-widget .btn-prev-slider').on('click', function () {
            if (slideIndex > 0) {
                slideIndex = slideIndex - 1;
                slide(slideIndex);
            } else {
                slideIndex = itemLength - 1;
                slide(slideIndex);
            }
        });
    };

    function slide(NewSlideIndex) {
        var left = (NewSlideIndex * (-100)) + '%';
        $('.images-slider-widget .container .slider').css({
            marginLeft: left,
            transition: '1s'
        });

        slideIndex = NewSlideIndex;
    }

    imagesSlider();
})();