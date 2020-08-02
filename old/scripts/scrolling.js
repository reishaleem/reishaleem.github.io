$(function() {
    $(window).on('load resize', function () {
        $('.fill-screen').css('height', window.innerHeight);
    });

    $('.navbar-nav a, .down-arrow a, .sections a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

});
