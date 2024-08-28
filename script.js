// JavaScript for the login page
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#login-form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const errorMessage = document.querySelector('#error-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset any previous error message
        errorMessage.textContent = '';

        // Perform real-time validation
        if (emailInput.value === '') {
            displayError('Email is required.');
        } else if (!isValidEmail(emailInput.value)) {
            displayError('Invalid email format.');
        } else if (passwordInput.value === '') {
            displayError('Password is required.');
        } else {
            // Simulate form submission (replace with your actual submission code)
            simulateSubmission();
        }
    });

    // Helper function to display an error message
    function displayError(message) {
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
    }

    // Helper function to check the email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Simulate form submission (replace with actual submission code)
    function simulateSubmission() {
        errorMessage.textContent = 'Logging in...';
        setTimeout(function () {
            errorMessage.textContent = 'Login successful!';
            // Redirect to another page or perform the necessary actions
        }, 2000);
    }  
});
