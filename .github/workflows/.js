document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate form fields
    let isValid = true;

    if (fullName.length < 5) {
        showError('nameError', 'Name must be at least 5 characters long');
        isValid = false;
    }

    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email');
        isValid = false;
    }

    if (phone === '123456789' || phone.length !== 10) {
        showError('phoneError', 'Enter a valid 10-digit phone number');
        isValid = false;
    }

    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        showError('passwordError', 'Password is not strong enough');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add code to submit the form data to the server
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
}
