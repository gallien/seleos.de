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
    console.log(offsetPosition);
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
        const div = document.querySelector(anchor);
        console.log(div);
        if (div) {
            scrollToTarget(div);
        } else {
            window.location = anchor;
        }
    }));
};

if (window.addEventListener) {
    window.addEventListener('load', ready, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', ready);
}
