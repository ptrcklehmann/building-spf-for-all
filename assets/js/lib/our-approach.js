$(window).on('load',function() {
    tippy('.approach-globe',{
        content: "<h6 class='mb-0'>53% of the population has no access to social protection</h6>",
        allowHTML: true,
        animation: 'scale',
        theme: 'bspffa',
    })
    new Accordion('.accordion-life-whithout-social-protection');
})
$(function() {
    'use strict';
    // Give Active Class
    $('.item').first().addClass('active');
    // Show First Info
    $('.info').first().show().animate({width: '40%'});
    // Show Info On Click
    $('.item').click(function() {
        $(this).addClass("active").siblings('.item').removeClass('active');
        $(this).next().show().animate({width: '40%'}).siblings('.info').animate({width: 0},function() {
            $(this).hide();
        });
    });
});