document.addEventListener('DOMContentLoaded', () => {
    // Kode untuk smooth scroll
    const navLinks = document.querySelectorAll('nav ul a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Sesuaikan dengan tinggi header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Kode untuk animasi gulir
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// ...existing code...
document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector('.stars');
    const numStars = 80; // jumlah bintang

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${1.5 + Math.random() * 2}s`;
        star.style.opacity = `${0.5 + Math.random() * 0.5}`;
        starsContainer.appendChild(star);
    }
});