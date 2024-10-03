const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Toggle Panel for Sign In/Sign Up
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Ripple effect for button click
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Apply ripple effect to buttons
document.querySelectorAll("button[type='submit'], button.ghost").forEach(button => {
    button.addEventListener("click", createRipple);
});

// Toggle Password
function togglePassword(formType) {
    const passwordField = document.getElementById(formType === 'signIn' ? 'signInPassword' : 'signUpPassword');
    const toggleIcon = document.querySelector(`.toggle-password[data-form="${formType}"]`);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.textContent = "🙈"; // Show an eye-off icon
    } else {
        passwordField.type = "password";
        toggleIcon.textContent = "👁️"; // Show an eye icon
    }
}

// Handle Login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;

    if (username && password) {
        container.classList.add('fade-out');
        setTimeout(() => {
            alert('Login successful! Redirecting...');
            window.location.href = "index.html"; // Redirect to your main page
        }, 1000);
    } else {
        alert('Please enter both username and password');
    }
}

// Handle Signup
function signup(event) {
    event.preventDefault();

    const employeeName = document.getElementById('signUpEmployeeName').value;
    const email = document.getElementById('signUpEmail').value;
    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;

    if (employeeName && email && username && password) {
        alert(`Signup successful! Welcome, ${username}`);
        container.classList.remove("right-panel-active");
    } else {
        alert('Please fill in all fields to create an account');
    }
}
