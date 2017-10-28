$(document).ready(function () {
    
    $('.btn-overlay .item').on('click', function () {
        var overlayNumber = $(this).data('overlay');
        startOverlay(overlayNumber);
    });

    $('.btn-close-overlay').on('click', function () {
        $('.overlay').fadeOut('300', function () {
            $('.overlay-wrapper').fadeOut('300');
        });
    });

    function startOverlay (number) {
        $('div[data-overlay-content="' + number +'"]').fadeIn('300', function () {
            $('.overlay').fadeIn('300');
        });
    }
});