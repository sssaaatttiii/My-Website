document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mobile = document.getElementById('mobile').value;
    const gender = document.getElementById('gender').value;

    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Save the user data (Simulation)
    const userData = {
        username: username,
        email: email,
        mobile: mobile,
        gender: gender,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Registration successful! You can now log in.');

    // Redirect to login page
    window.location.href = 'login.html';
});
