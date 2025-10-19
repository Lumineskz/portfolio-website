// Mouse tracking
document.addEventListener('mousemove', (e) => {
    // Get the current mouse position (relative to the viewport)
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    document.body.style.setProperty('--mouse-x', `${mouseX}px`);
    document.body.style.setProperty('--mouse-y', `${mouseY}px`);
});


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


// ** PREVIEW IMAGE UPON HOVERING ON PROJECT **
document.addEventListener('DOMContentLoaded', () => {
    // ... existing ScrollSpy code ...
    
    // New variables for image preview
    const previewBox = document.getElementById('image-preview-box');
    const previewImage = document.getElementById('preview-image');
    const projectLinks = document.querySelectorAll('.project-link'); // Select all links with the class

    // Event listeners for each project link
    projectLinks.forEach(link => {
        
        // --- SHOW PREVIEW (Mouse Enter) ---
        link.addEventListener('mouseenter', function() {
            const imgUrl = this.getAttribute('data-preview-img');
            
            if (imgUrl) {
                // Set the image source
                previewImage.src = imgUrl;
                
                // Show the preview box after a slight delay for smoother reveal
                setTimeout(() => {
                    previewBox.classList.add('visible');
                }, 50); // Small delay
            }
        });

        // --- POSITION PREVIEW (Mouse Move) ---
        link.addEventListener('mousemove', function(e) {
            // Get cursor coordinates (clientX/Y are viewport relative)
            const x = e.clientX;
            const y = e.clientY;
            
            // Set the box position directly above the cursor
            // The CSS transform: translate(-50%, -100%) handles centering and placement
            previewBox.style.left = `${x}px`;
            previewBox.style.top = `${y - 10}px`; // -10px lifts it slightly off the cursor
        });

        // --- HIDE PREVIEW (Mouse Leave) ---
        link.addEventListener('mouseleave', function() {
            // Hide the preview box immediately
            previewBox.classList.remove('visible');
            
            // Clear the source after hiding to prevent a brief flash of the old image
            setTimeout(() => {
                previewImage.src = ''; 
            }, 300); // Wait for the CSS transition (0.3s) to finish
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // --- 0. MOBILE MENU TOGGLE ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainHeader = document.getElementById('main-header');

    if (hamburgerBtn && mobileMenu) {
        // Open the menu
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            mainHeader.classList.add('menu-open');
        });

        // Close the menu using the 'X' button
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mainHeader.classList.remove('menu-open');
        });
        
        // Also close the menu when a nav link is clicked (UX improvement)
        const navLinks = document.querySelectorAll('.fixed-container .nav-links a');
        navLinks.forEach(link => {
             link.addEventListener('click', () => {
                 // Only auto-close on mobile (check if the menu is open)
                 if (mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    mainHeader.classList.remove('menu-open');
                 }
             });
        });
    }

});