// Fade-in elements on scroll
const aboutItems = document.querySelectorAll('.about-item, .item-text, .contact, .branches, .order-section');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

aboutItems.forEach(item => observer.observe(item));

// Show text on click for gallery items
const galleryItems = document.querySelectorAll('.about-item-container');

galleryItems.forEach(container => {
    container.addEventListener('click', () => {
        const text = container.querySelector('.item-text')?.textContent;
        if (text) alert(text);
    });
});
