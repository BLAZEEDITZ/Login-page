document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with actual authentication logic
    if (username === 'your_username' && password === 'your_password') {
        // Redirect to the dashboard page after successful login
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});
