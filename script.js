// Countdown Timer to April 17, 2026
const conferenceDate = new Date("April 17, 2026 09:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = conferenceDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2>Conference has started!</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}, 1000);

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Modal Logic
    const btnCommittees = document.getElementById('btn-committees');
    const modalOverlay = document.getElementById('committee-modal');
    const closeModal = document.getElementById('close-modal');

    if (btnCommittees && modalOverlay && closeModal) {
        // Open Modal
        btnCommittees.addEventListener('click', () => {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close Modal
        const closeModalFunction = () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        };

        closeModal.addEventListener('click', closeModalFunction);

        // Close on outside click
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModalFunction();
            }
        });
    }

    // Scroll Progress & Indicator Logic
    const progressBar = document.getElementById('scroll-progress');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (progressBar || scrollIndicator) {
        window.addEventListener('scroll', () => {
            // Update Progress Bar
            if (progressBar) {
                const scrollTotal = document.documentElement.scrollTop;
                const heightTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollPercentage = (scrollTotal / heightTotal) * 100;
                progressBar.style.width = scrollPercentage + '%';
            }

            // Fade out the bounce indicator after scrolling down a bit
            if (scrollIndicator) {
                if (window.scrollY > 150) {
                    scrollIndicator.classList.add('hidden');
                } else {
                    scrollIndicator.classList.remove('hidden');
                }
            }
        });
    }
});
