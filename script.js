// FUNGSI UNTUK PRELOADER INTERAKTIF
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const enterButton = document.getElementById('enter-button');
    const welcomeSound = document.getElementById('welcome-sound');
    const loaderText = document.querySelector('.loader-text');

    if (enterButton) {
        enterButton.addEventListener('click', () => {
            // 1. Sembunyikan tombol
            enterButton.style.display = 'none';

            // 2. Tampilkan teks "Welcome"
            if (loaderText) {
                loaderText.classList.add('visible');
                const spans = loaderText.querySelectorAll('span');
                spans.forEach((span, index) => {
                    span.style.transitionDelay = `${index * 0.2}s`;
                });
            }

            // 3. Putar suara
            if (welcomeSound) {
                welcomeSound.play();
            }

            // 4. Tunggu sebentar, lalu hilangkan preloader
            setTimeout(() => {
                if (preloader) {
                    preloader.classList.add('hidden');
                }
                
                // 5. Mulai animasi nama setelah preloader hilang dan transisi selesai
                setTimeout(() => {
                    startNameAnimation();
                }, 1000); // Memberi jeda 1 detik agar transisi mulus
            }, 2000);
        });
    }
});

function startNameAnimation() {
    const nameText = "Gede Bhadra Mana Daniswara"; 
    const nameElement = document.getElementById('name-animation');
    if (nameElement) {
        nameElement.textContent = '';
        let charIndex = 0;

        function typeName() {
            if (charIndex < nameText.length) {
                nameElement.textContent += nameText.charAt(charIndex);
                charIndex++;
                setTimeout(typeName, 150);
            }
        }
        typeName();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ===== FUNGSI FADE-IN SAAT SCROLL =====
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // ===== FUNGSI UNTUK HAMBURGER MENU =====
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('#nav-links li a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            this.classList.toggle('active');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
                hamburger.classList.remove('active');
            });
        });
    }

    // ===== FUNGSI UNTUK SLIDER DOKUMENTASI (SWIPER.JS) =====
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        }
    });
});