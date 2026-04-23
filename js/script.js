// Simple JavaScript for interactivity
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Hello! This is a simple static website.');
});

// Form submission (since it's static, just prevent default and show alert)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! (This is just a demo)');
});