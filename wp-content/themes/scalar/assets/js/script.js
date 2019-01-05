jQuery(function($){

// toggle nav menu for sp
(function ToggleNavMenu() {

    $('.l-header-navbtn').on('click', function(e){
        $('html').toggleClass('is-nav-open');
    });
    $('.l-header-nav-menu a').on('click', function(e){
        $('html').removeClass('is-nav-open');
    });
}());


// top mainvisual parallax
(function TopVisualParallax() {
    var $hero = $('.p-top-hero');

    if(!$hero.length) return;

    function parallax() {
        var win_top = $(window).scrollTop();
        var bg_position_y = win_top / 5 + 'px'
        $hero.css('background-position-y', bg_position_y);
    }

    parallax();

    $(window).on('scroll', parallax);
}());

// smooth scroll
(function SmoothScroll() {
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var href= $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top;
        $('html, body').animate({scrollTop:position}, 400, 'swing');
        return false;
    });
}());

});
