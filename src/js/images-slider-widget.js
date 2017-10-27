$(document).ready(function () {

    var itemSlide = $('.images-slider-widget .container .slider ul li');
    var itemLength = itemSlide.length;
    var slideIndex = 0;

    itemSlide.each(function (index, current) {
        var leftPercent = (100 * index) + '%';
        $(this).css({
            left: leftPercent
        });
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

    function slide(NewSlideIndex) {
        var left = (NewSlideIndex * (-100)) + '%';
        $('.images-slider-widget .container .slider').css({
            marginLeft: left,
            transition: '1s'
        });

        slideIndex = NewSlideIndex;
    }

    function changeBackground () {
        var getSlideBackground = $('.images-slider-widget.active').attr('data-background');
        $('body').css({
            background: getSlideBackground,
            'background-size': 'cover'
        });
    }

    changeBackground();
});