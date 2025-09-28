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
//Slide Etika Mahasiswa//
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function showSlide(i) {
  index += i;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(-1));
next.addEventListener('click', () => showSlide(1));

// Auto play setiap 5 detik
setInterval(() => showSlide(1), 5000);
