// Handling Newsletter Subscription
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('newsletter-email').value;
    if (email) {
        // Simulate newsletter subscription (In reality, you would integrate with a backend here)
        document.getElementById('newsletter-message').textContent = `Thanks for subscribing, ${email}!`;
        document.getElementById('newsletter-form').reset();
    } else {
        alert('Please enter a valid email');
    }
});

// Handling Sign Up
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    if (name && email && password) {
        // Simulate account creation (Integrate with backend for real functionality)
        alert('Sign up successful! Welcome to EpiclyIcklepig YT!');
        document.getElementById('signup-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Handling Login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email && password) {
        // Simulate login (In a real app, validate user credentials via a backend)
        alert('Login successful! Welcome back!');
        document.getElementById('login-form').reset();
    } else {
        alert('Please enter valid login details.');
    }
});
