jQuery(document).ready(function() {
    jQuery('.nav-link').click(function (e) {
        const divId = jQuery(this).attr('href');
        jQuery('html, body').animate({
            scrollTop: jQuery(divId).offset().top - 50
        }, 100);
        e.preventDefault();
    });
});
