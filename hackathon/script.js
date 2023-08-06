const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

loginLink.addEventListener('click', () => {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupLink.addEventListener('click', () => {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    console.log('Data stored successfully.');
});
