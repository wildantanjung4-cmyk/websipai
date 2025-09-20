$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 40) {
        $('.navbar-main').addClass('fixed-menu');
        $('.navbar-main').addClass('shadow');
        $('.mt-87').addClass('d-block');
        $('.top').addClass('d-none');
        $('.scroll').addClass('d-block');
    } else {
        $('.navbar-main').removeClass('fixed-menu');
        $('.navbar-main').removeClass('shadow');
        $('.mt-87').removeClass('d-block');
        $('.top').removeClass('d-none');
        $('.scroll').removeClass('d-block');
    }
});

function showTabMenu(e) {
    e.preventDefault();
    $('.sidebar').slideToggle();
}

function openNavbarSecond() {
    $('.navbar-second').slideToggle(300);
}

function closeNavbarSecond() {
    $('.navbar-second').slideUp(300);
}