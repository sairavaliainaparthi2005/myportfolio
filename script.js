// Intersection Observer for Reveal Animations
const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Sticky Header Effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Advanced Typing Effect
const typingText = document.querySelector(".typing");
const roles = [
    "Computer Science Student",
    "Aspiring Frontend Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    type();
});

// Form Handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector("button");
        const originalText = btn.textContent;

        btn.textContent = "Sending...";
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    });
}

// Theme Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.add("light-mode");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});
// Close mobile menu on link click
const navLinks = document.querySelectorAll("nav ul li a");
const menuToggle = document.getElementById("menu-toggle");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (menuToggle) menuToggle.checked = false;
    });
});

