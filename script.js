// script.js

document.addEventListener('mousemove', (e) => {
    // Get the current mouse position (relative to the viewport)
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Convert pixel values to percentage or "px" for CSS custom properties.
    // Here we'll use pixel values for high precision, but we need to account for scrolling.
    
    // Calculate the mouse position relative to the entire page, including scroll.
    // Since the CSS 'background-attachment: fixed' is used, we only need the viewport coordinates.

    // Update the CSS variables on the body element.
    document.body.style.setProperty('--mouse-x', `${mouseX}px`);
    document.body.style.setProperty('--mouse-y', `${mouseY}px`);
});

// script.js

// --- 1. TORCHLIGHT MOUSE TRACKING ---
document.addEventListener('mousemove', (e) => {
    // Get the current mouse position (relative to the viewport)
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Update the CSS variables on the body element.
    document.body.style.setProperty('--mouse-x', `${mouseX}px`);
    document.body.style.setProperty('--mouse-y', `${mouseY}px`);
});

// --- 2. ACTIVE NAVIGATION HIGHLIGHTING (ScrollSpy) ---
document.addEventListener('DOMContentLoaded', () => {
    // Get all section elements (targets for the scroll)
    const sections = document.querySelectorAll('h2[id]');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.fixed-container .nav-links a');

    // Function to check scroll position and update the active link
    const updateActiveLink = () => {
        let current = '';
        
        // Loop through all sections to find which one is currently in the viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // We consider a section active when the scroll is past its top, 
            // and we subtract a small offset (e.g., 200px) to activate the link 
            // before the section hits the very top of the screen.
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        // Remove the 'active' class from all links first
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add the 'active' class to the link that matches the current section ID
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    // Attach the function to the scroll event
    window.addEventListener('scroll', updateActiveLink);
    
    // Run once on load to set the initial active link
    updateActiveLink();
});