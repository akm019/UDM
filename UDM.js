// UDM.js

// Function to toggle the navigation menu on small screens
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Event listener for the menu icon
const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', toggleMenu);

// Close the navigation menu when a link is clicked
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('active');
    });
});
