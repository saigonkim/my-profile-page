document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-up base class dynamically and observe
    const elementsToAnimate = document.querySelectorAll('.section-title, .about-grid, .expertise-card, .skill-category, .project-card, .process-step, .requirements-box, .hero-title, .hero-subtitle, .hero-cta');

    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-up');
        // Add staggered delays for grid items logic
        if (el.classList.contains('expertise-card') || el.classList.contains('project-card') || el.classList.contains('process-step')) {
            const delay = (index % 3) * 150; // stagger per row (approx)
            if (delay > 0) el.style.transitionDelay = `${delay}ms`;
        }
        observer.observe(el);
    });

    // Header background change on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    });

    // Initialize specific components here when ready
});
