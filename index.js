 // Mobile menu toggle
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

//  tetsimponial


    // Create floating dots
    const floatingDots = document.getElementById('floatingDots');
    const dotCount = 30;
    
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        // Random positioning
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 6 + 2;
        const opacity = Math.random() * 0.3 + 0.1;
        const animationDuration = Math.random() * 20 + 10;
        const animationDelay = Math.random() * 10;
        
        dot.style.left = `${posX}%`;
        dot.style.top = `${posY}%`;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.opacity = opacity;
        dot.style.animationDuration = `${animationDuration}s`;
        dot.style.animationDelay = `-${animationDelay}s`;
        
        floatingDots.appendChild(dot);
    }
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => {
                if (c !== card) {
                    c.style.transform = 'scale(0.95)';
                    c.style.filter = 'blur(1px)';
                }
            });
        });
        
        card.addEventListener('mouseleave', () => {
            cards.forEach(c => {
                c.style.transform = '';
                c.style.filter = '';
            });
        });
    });
// toggle 

document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word-swapper .word');
    let currentIndex = 0;
    
    function swapWords() {
        // Fade out current word
        words[currentIndex].classList.remove('active');
        
        // Calculate next index
        currentIndex = (currentIndex + 1) % words.length;
        
        // Fade in next word
        words[currentIndex].classList.add('active');
    }
    
    // Start swapping every 2.5 seconds
    setInterval(swapWords, 2500);
    
    // Initial swap after 1 second
    setTimeout(swapWords, 1000);
});
