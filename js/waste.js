const target = 67374;
const duration = 5000;  // Duration in milliseconds (5 seconds)
const fps = 60;         // Number of updates per second (60 frames per second)
const totalFrames = fps * (duration / 1000); // Total number of frames for 5 seconds
const increment = target / totalFrames;      // How much to increment in each frame

let count = 0;
let hasStarted = false;  // Flag to track if the counter has started

const counterElement = document.getElementById('counter');

function updateCounter() {
    count += increment;
    counterElement.textContent = Math.round(count).toLocaleString(); // Round and format with commas

    if (count < target) {
        requestAnimationFrame(updateCounter);  // Use requestAnimationFrame for smooth updates
    } else {
        counterElement.textContent = target.toLocaleString();  // Ensure it ends exactly at 67,000
    }
}

// Check if the counter is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Trigger the counter when scrolled into view
function onScroll() {
    if (isElementInViewport(counterElement) && !hasStarted) {
        hasStarted = true;  // Set the flag to true so it doesn't restart
        updateCounter();     // Start the counter when in view
    }
}

window.addEventListener('scroll', onScroll);  // Listen for scroll events