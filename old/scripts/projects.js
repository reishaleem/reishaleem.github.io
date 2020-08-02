$(document).ready(function() {
    $("#project-hidden a").on('click', function(e) {
        e.preventDefault()
        var page = $(this).data('page');
        $("#projects-info .project-info:not('.hide')").stop().fadeOut('fast', function() {
            $(this).addClass('hide');
            $('#projects-info .project-info[data-page="'+page+'"]').fadeIn('slow').removeClass('hide');
        });
    });
});