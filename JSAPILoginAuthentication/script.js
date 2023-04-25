const form = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Get the input values from the form fields
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the input values are valid
  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  // Send a request to the REST API to authenticate the user
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // Authentication successful, redirect the user to the desired page
        window.location.href = '/dashboard';
      } else {
        // Authentication failed, display an error message to the user
        alert('Invalid username or password.');
      }
    })
    .catch(err => console.error(err));
});