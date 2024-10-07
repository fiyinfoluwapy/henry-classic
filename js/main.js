// main.js

// Function to show styles based on the clicked category
function showStyles(category) {
    // Hide all style sections
    const allSections = document.querySelectorAll('#styles-container > div');
    allSections.forEach(section => section.classList.add('hidden'));

    // Show the selected category's styles
    const selectedSection = document.getElementById(category);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

// Function to change background images every 20 seconds
const images = [
    './img/big-shoe1.png',
    './img/big-shoe2.png',
    './img/big-shoe3.png',
    // Add more images as needed
];

let currentImageIndex = 0;

// Change background image every 20 seconds
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector('header').style.backgroundImage = `url('${images[currentImageIndex]}')`;
}, 20000);


// JavaScript to fade in the Appointment section when in view
document.addEventListener('DOMContentLoaded', () => {
    const showAppointmentBtn = document.getElementById('show-appointment');
    const appointmentSection = document.getElementById('appointment');
    const form = document.querySelector('form');  // Assuming you have a form element
    const dateTimeInput = document.getElementById('appointment-date');  // Update ID here

    // Show appointment section and hide the button
    showAppointmentBtn.addEventListener('click', () => {
        appointmentSection.classList.add('fade-in');
        showAppointmentBtn.style.display = 'none';  // Hide the button after it's clicked
    });

    // Reset the form after submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission for testing

        // Simulate form submission to Formspree
        setTimeout(() => {
            alert('Form submitted successfully!');

            // Clear the input field after form submission
            dateTimeInput.value = '';

            // Optionally, reset the form entirely
            form.reset();
        }, 1000);
    });
});
