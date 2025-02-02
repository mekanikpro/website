// Main JavaScript file for Machine Maintenance Specialist Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initializeNavigation();
    initializeServiceCards();
    initializeContactForm();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Service Cards Animation
function initializeServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });
}

// Contact Form Validation and Submission
function initializeContactForm() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showAlert('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showAlert('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    elements.forEach(element => observer.observe(element));
}

// Utility Functions
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    document.body.appendChild(alertDiv);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Service Booking System
function initializeBookingSystem() {
    const bookingForm = document.querySelector('#booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get booking details
            const service = document.querySelector('#service-type').value;
            const date = document.querySelector('#booking-date').value;
            const time = document.querySelector('#booking-time').value;
            
            // Validate booking
            if (!service || !date || !time) {
                showAlert('Please fill in all booking details', 'error');
                return;
            }
            
            // Process booking (simulate API call)
            processBooking(service, date, time);
        });
    }
}

// Simulate booking processing
function processBooking(service, date, time) {
    // Simulate API call delay
    setTimeout(() => {
        showAlert('Booking request received! We will contact you shortly.', 'success');
    }, 1000);
}

// Initialize testimonials slider if exists
function initializeTestimonialSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    
    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
}