// // Function to apply the saved theme from localStorage
// function applyTheme() {
//     // Check if the user has a saved theme preference in localStorage
//     if (localStorage.getItem('theme') === 'dark') {
//         document.body.classList.add('dark-mode'); // Apply dark mode
//     } else {
//         document.body.classList.remove('dark-mode'); // Apply light mode
//     }
// }

// // Call the function to apply the theme when the page loads
// applyTheme();

// // Get the dark mode toggle button
// const darkModeToggle = document.getElementById('darkModeToggle');

// // Event listener to toggle dark mode when the button is clicked
// darkModeToggle.addEventListener('click', () => {
//     // Toggle the dark mode class
//     document.body.classList.toggle('dark-mode');
    
//     // Save the current theme in localStorage
//     if (document.body.classList.contains('dark-mode')) {
//         localStorage.setItem('theme', 'dark');  // Save dark mode
//     } else {
//         localStorage.setItem('theme', 'light'); // Save light mode
//     }
// });
// Function to apply the theme based on localStorage
function applyTheme() {
    const theme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no theme is set
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}

// Function to toggle the theme and update localStorage
function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Apply the theme immediately on page load
document.addEventListener('DOMContentLoaded', applyTheme);

// Add event listener to the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleTheme);
}
