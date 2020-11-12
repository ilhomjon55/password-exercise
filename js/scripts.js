// Get necessary elements
var elFormPassword = document.querySelector('.js-form-password');
var elPasswordInput = elFormPassword.querySelector('.js-password-input');
var elPasswordResult = document.querySelector('.js-password-result');
var elAttemptsResult = document.querySelector('.js-attempt-result');

// Declare standard variables
var PASSWORD = 'iampassword';
var PASSWORD_LENGTH = 8;
var ATTEMPT = 5;

// Add validatePassword function
var validatePassword = function (evt) {
  evt.preventDefault();

  // Validate attempts
  if (ATTEMPT === 0) {
    elPasswordInput.value = '';
    elPasswordInput.classList.remove('is-invalid', 'is-valid');
    elPasswordInput.setAttribute('disabled', true);
    elPasswordResult.textContent = '';
    elAttemptsResult.textContent = 'You lost all attempts';
    return;
  } else {
    ATTEMPT--
    elAttemptsResult.textContent = ATTEMPT;
  }

  // Get uset input
  var passwordInput = elPasswordInput.value.trim();

  // Validate user input
  elPasswordInput.classList.remove('is-invalid', 'is-valid');

  if (!passwordInput) {
    alert('Enter password :(');
    elPasswordInput.classList.add('is-invalid');
    return;
  }

  if (passwordInput.length < PASSWORD_LENGTH) {
    alert('At least 8 characters :(');
    elPasswordInput.classList.add('is-invalid');
    return;
  }

  // Check whether password is correct or not
  elPasswordResult.classList.remove('text-success', 'text-danger');

  if (passwordInput === PASSWORD) {
    elPasswordInput.classList.add('is-valid');
    elAttemptsResult.classList.add('d-none');
    elPasswordResult.textContent = 'Correct :)';
    elPasswordResult.classList.add('text-success');
  } else {
    elPasswordInput.classList.add('is-invalid');
    elPasswordResult.textContent = 'Wrong :(';
    elPasswordResult.classList.add('text-danger');
  }
}

// Add eventListener
elFormPassword.addEventListener('submit', validatePassword);