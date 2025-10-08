// Toggle menu eksternal di header shadow (mobile)
function toggleHeaderMenu() {
    var menu = document.getElementById('headerMenuEksternal');
    if (menu) {
        menu.classList.toggle('show');
    }
}

// Slider Etika Mahasiswa
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let current = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    showSlide(current);
});

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

<script>
function toggleNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Fungsi untuk toggle submenu (untuk mobile)
function toggleDropdown(event, submenuId) {
  event.preventDefault(); // Cegah default link
  var submenu = document.getElementById(submenuId);
  if (submenu.classList.contains('active')) {
    submenu.classList.remove('active');
  } else {
    // Tutup submenu lain jika ada
    var allSubmenus = document.querySelectorAll('.dropdown-submenu');
    allSubmenus.forEach(function(s) {
      s.classList.remove('active');
    });
    submenu.classList.add('active');
  }
}

// Tutup menu jika klik di luar (opsional, untuk UX lebih baik)
window.onclick = function(event) {
  if (!event.target.matches('.icon') && !event.target.matches('.dropdown-toggle') && !event.target.closest('#myLinks')) {
    var myLinks = document.getElementById("myLinks");
    if (myLinks.style.display === "block") {
      myLinks.style.display = "none";
    }
    var allSubmenus = document.querySelectorAll('.dropdown-submenu');
    allSubmenus.forEach(function(s) {
      s.classList.remove('active');
    });
  }
}
</script>

