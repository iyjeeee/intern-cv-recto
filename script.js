// ===== FEATURE 1: DARK MODE / LIGHT MODE TOGGLE =====

// Get the theme toggle button
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Load theme preference from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙 Dark Mode';
    }
}

// Toggle theme function
function toggleTheme() {
    body.classList.toggle('dark-mode');
    
    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

// Add event listener to theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Load theme on page load
window.addEventListener('DOMContentLoaded', loadTheme);


// ===== FEATURE 2: SIMPLE GREETING ALERT / WELCOME MESSAGE =====

// Display greeting message on page load
function displayGreeting() {
    // Get current hour
    const currentHour = new Date().getHours();
    let greeting;
    
    // Determine greeting based on time of day
    if (currentHour < 12) {
        greeting = 'Good Morning! Welcome to my portfolio.';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon! Welcome to my portfolio.';
    } else {
        greeting = 'Good Evening! Welcome to my portfolio.';
    }
    
    // Display the greeting alert
    alert(greeting + '\n\nI\'m John Andrei Recto, an Intern Web Developer.\nFeel free to explore my portfolio!');
}

// Show greeting alert when page loads
window.addEventListener('DOMContentLoaded', displayGreeting);
