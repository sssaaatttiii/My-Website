document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    // Check if the email exists (simulation)
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email) {
        alert('A password reset link has been sent to your email address.');
        // Simulate sending a reset link
    } else {
        alert('Email not found. Please try again or register a new account.');
    }
});
