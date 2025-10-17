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