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
 