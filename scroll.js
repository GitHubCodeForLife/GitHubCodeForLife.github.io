const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        console.log({top: rect.top, innerHeight: window.innerHeight})

        if (rect.top + 50 < window.innerHeight) {
            el.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load