$(function() {
    $(window).on('load resize', function () {
        $('.fill-screen').css('height', window.innerHeight);
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 52
    });

    $('nav a, .down-arrow a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > $('#about').position().top-55)
        {
            $('.navbar-transparent').addClass('nonactive');
            $('.nav-transparent').addClass('nonactive');
        } else {
            $('.navbar-transparent').removeClass('nonactive');
            $('.nav-transparent').removeClass('nonactive');
        }
    });

});
