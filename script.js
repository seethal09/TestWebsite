const elements = document.querySelectorAll('.fade-in');

function reveal() {
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight - 100;

        if (elementTop < windowHeight) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
