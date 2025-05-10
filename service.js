
const mobileMenu = document.getElementById('mobile-menu');
 const navLinks = document.querySelector('.nav-links');
 
 mobileMenu.addEventListener('click', () => {
     mobileMenu.classList.toggle('active');
     navLinks.classList.toggle('active');
     
     // Animate hamburger to X
     const spans = mobileMenu.querySelectorAll('span');
     if(mobileMenu.classList.contains('active')) {
         spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
         spans[1].style.opacity = '0';
         spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
     } else {
         spans[0].style.transform = 'rotate(0) translate(0)';
         spans[1].style.opacity = '1';
         spans[2].style.transform = 'rotate(0) translate(0)';
     }
 });
 
 // Close menu when clicking on a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
         mobileMenu.classList.remove('active');
         
         // Reset hamburger animation
         const spans = mobileMenu.querySelectorAll('span');
         spans[0].style.transform = 'rotate(0) translate(0)';
         spans[1].style.opacity = '1';
         spans[2].style.transform = 'rotate(0) translate(0)';
     });
 });


//  Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Service cards animation
    const serviceCards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Why us features animation
    const features = document.querySelectorAll('.feature');
    
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transitionDelay = `${index * 0.15}s`;
        featureObserver.observe(feature);
    });
    
    // Create dynamic particles and sparkles
    const floatingContainer = document.querySelector('.particles');
    
    // Create particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.top = `${Math.random() * 90 + 5}%`;
        particle.style.left = `${Math.random() * 90 + 5}%`;
        particle.style.width = `${Math.random() * 100 + 50}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        floatingContainer.appendChild(particle);
    }
    
    // Create sparkles
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.top = `${Math.random() * 90 + 5}%`;
        sparkle.style.left = `${Math.random() * 90 + 5}%`;
        sparkle.style.width = `${Math.random() * 6 + 4}px`;
        sparkle.style.height = sparkle.style.width;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        floatingContainer.appendChild(sparkle);
    }
});
