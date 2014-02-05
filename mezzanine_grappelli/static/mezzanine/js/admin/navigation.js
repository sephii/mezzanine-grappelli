jQuery(function($) {

    // Empty out the breadcrumbs div and add the menu into it.
    $('.breadcrumbs').html('')
                     .append($('.dropdown-menu').show())
                     .css({display: 'inline-block'});

    // Set the hrefs for the primary menu items to the href of their first
    // child (unless the primary menu item already has an href).
    $('.dropdown-menu a').each(function() {
       if ( $(this).attr('href') == '#' ) {
         $(this).attr('href', $(this).parent().find('.dropdown-menu-menu a:first').attr('href'));
       }
    });

    // Provides link to site.
    $('#user-tools li:last').before('<li>' + window.__home_link + '</li>');
});
