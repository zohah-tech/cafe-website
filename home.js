// -----------------------------------------------------
// SMOOTH SCROLL FOR NAV LINKS
// -----------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// -----------------------------------------------------
// STICKY NAVBAR ON SCROLL
// -----------------------------------------------------
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("sticky-nav");
    } else {
        navbar.classList.remove("sticky-nav");
    }
});


// -----------------------------------------------------
// BUTTON CLICK BOUNCE EFFECT
// -----------------------------------------------------
document.querySelectorAll(".btn, .nav-order-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.92)";
        setTimeout(() => button.style.transform = "scale(1)", 150);
    });
});


// -----------------------------------------------------
// ANIMATE FOOD GRID ITEMS WHEN THEY ENTER VIEWPORT
// -----------------------------------------------------
const foodElements = document.querySelectorAll('.food-image img, .food-text');

const foodObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            foodObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

foodElements.forEach(item => foodObserver.observe(item));


// -----------------------------------------------------
// FADE IN MAP AND INFO GRID ON SCROLL
// -----------------------------------------------------
const fadeInElements = document.querySelectorAll('.map, .info-grid-section');

fadeInElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
});

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'all 1s ease-out';
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.25 });

fadeInElements.forEach(el => fadeObserver.observe(el));
