// -------------------- Menu Animations & Interactions --------------------

// Fade-in items when they scroll into view
const menuItems = document.querySelectorAll('.menu-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // triggers CSS animation
            observer.unobserve(entry.target);   // stop observing once shown
        }
    });
}, { threshold: 0.1 });

menuItems.forEach(item => observer.observe(item));

// Show item details on click
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const name = item.querySelector('.item-name').textContent;
        const price = item.querySelector('.item-price').textContent;
        alert(`${name} – ${price}`);
    });
});

// Toggle menu items when clicking the category heading
const categories = document.querySelectorAll('.menu-category');

categories.forEach(category => {
    const title = category.querySelector('h2');
    const items = category.querySelectorAll('.menu-item');

    title.style.cursor = 'pointer'; // indicate it's clickable

    title.addEventListener('click', () => {
        items.forEach(item => {
            item.style.display = item.style.display === 'none' ? 'inline-block' : 'none';
        });
    });
});
