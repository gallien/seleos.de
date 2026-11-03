import 'bootstrap/js/src/collapse.js';
import 'bootstrap/js/src/scrollspy.js';

const scrollToTarget = function(target) {
    const element = target;
    const headerOffset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - headerOffset;
    if (offsetPosition < 0) {
        offsetPosition = 0;
    }
    window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
}

const ready = function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(element => element.addEventListener('click', function(event) {
        const anchor = event.currentTarget.getAttribute('href');
        const div = anchor && anchor.startsWith('#') ? document.querySelector(anchor) : null;
        if (div) {
            event.preventDefault();
            scrollToTarget(div);
        } else {
            window.location = anchor;
        }
    }));

    const navbar = document.getElementById('navbar-collapse');
    const navbarToggle = document.querySelector('.navbar-toggler');
    if (navbar && navbarToggle) {
        navbar.addEventListener('shown.bs.collapse', function() {
            navbarToggle.setAttribute('aria-label', 'Navigation schließen');
        });
        navbar.addEventListener('hidden.bs.collapse', function() {
            navbarToggle.setAttribute('aria-label', 'Navigation öffnen');
        });
    }

    // Fristen-Countdown: bleibt ohne Redaktionsaufwand aktuell und wird nach
    // Ablauf der Frist ausgeblendet, statt einen falschen Stand anzuzeigen.
    document.querySelectorAll('.timeline-countdown[data-deadline]').forEach(function(element) {
        const deadline = new Date(`${element.dataset.deadline}T00:00:00Z`);
        if (Number.isNaN(deadline.getTime())) {
            return;
        }
        const now = new Date();
        const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        const days = Math.round((deadline.getTime() - today) / 86400000);
        if (days <= 0) {
            return;
        }
        element.textContent = days === 1 ? 'noch 1 Tag' : `noch ${days} Tage`;
        element.hidden = false;
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready, { once: true });
} else {
    ready();
}
