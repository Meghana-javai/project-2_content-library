// Function to handle login
function login(event) {
    event.preventDefault();
    // Fetch username and password from login form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Check if username and password are valid (e.g., compare with database)
    // For simplicity, let's assume valid credentials
    // Redirect to dashboard page
    window.location.href = 'dashboard.html';
}

// Function to handle registration
function register(event) {
    event.preventDefault();
    // Fetch username and password from registration form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Process registration (e.g., store in database)
    // For simplicity, let's assume registration is successful
    alert('Registration successful. Please login.');
    // Redirect to login page
    window.location.href = 'login.html';
}

// Attach event listeners to login and registration forms
document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('registerForm').addEventListener('submit', register);
