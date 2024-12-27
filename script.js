// script.js

// Toggle Navbar Menu on Small Screens
const menuToggle = document.getElementById('menuToggle');
const navbarNav = document.getElementById('navbarNav');

menuToggle?.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

// Smooth Scrolling for Anchor Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize Bootstrap Carousel (Fix Pause Issue)
const carousel = document.querySelector('#carouselExampleCaptions');
if (carousel) {
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 5000,
        wrap: true
    });

    carousel.addEventListener('mouseenter', () => {
        carouselInstance.pause();
    });

    carousel.addEventListener('mouseleave', () => {
        carouselInstance.cycle();
    });
}

// Navbar Scroll Behavior - Color Change and Sticky Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled', 'fixed-top');
    } else {
        navbar.classList.remove('scrolled', 'fixed-top');
    }
});

// Dynamic Footer Year
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


// Social Media Icon Click to Open Pages
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', (e) => {
        const platform = e.target.dataset.platform;
        let url = '';

        switch (platform) {
            case 'whatsapp':
                url = 'https://wa.me/1234567890';
                break;
            case 'instagram':
                url = 'https://www.instagram.com/gelinoworld/profilecard/?igsh=OGdxdHNkbjdhanA4';
                break;
            case 'facebook':
                url = 'https://facebook.com/yourpage';
                break;
        }

        if (url) {
            window.open(url, '_blank');
        }
    });
});

// Mobile Navbar Collapse on Link Click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            menuToggle.click();  // Close the menu on link click
        }
    });
});

// Back to Top Button
const backToTopButton = document.createElement('div');
backToTopButton.innerHTML = '&#8679;';
backToTopButton.id = 'backToTop';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 40px;
    right: 30px;
    font-size: 2rem;
    background: aquamarine;
    color: black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: none;
    z-index: 1000;
`;
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Trigger animations when scrolling to sections
document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});


//NGO section

document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const ngoFormContainer = document.getElementById('ngoFormContainer');

    // Ensure button is found and functional
    if (learnMoreBtn && ngoFormContainer) {
        learnMoreBtn.addEventListener('click', () => {
            ngoFormContainer.style.display = 'block';
            ngoFormContainer.style.opacity = '1';
        });
    }

    // Form submission logic
    document.getElementById('ngoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will contact you shortly.');
        document.getElementById('ngoForm').reset();
        ngoFormContainer.style.display = 'none';
    });
});