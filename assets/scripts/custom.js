const checkWebpFeature = function(feature, callback) {
    const kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    let img = new Image();
    img.onload = function () {
        const result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}

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
        behavior: 'smooth'
    });
}

const ready = function() {
    checkWebpFeature('lossy', function(feature, isSupported) {
        const element = document.getElementById('top');
        if (isSupported) {
            element.classList.add('webp');
        } else {
            element.classList.add('no-webp');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(element => element.addEventListener('click', function(event) {
        const anchor = event.target.getAttribute('href');
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

if (window.addEventListener) {
    window.addEventListener('load', ready, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', ready);
}
