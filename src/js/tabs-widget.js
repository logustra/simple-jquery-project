$(document).ready(function () {
    $('.tab-header .item').on('click', function () {
        var number = $(this).data('tab');

        $('.tab-header .item').removeClass('active');
        $(this).addClass('active');

        $('.tab-contents .item').hide();
        $('div[data-content="'+ number +'"]').fadeIn('300');
    });
});