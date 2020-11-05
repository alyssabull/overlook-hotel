import './css/base.scss';

let enterCredentials = document.querySelector('.enter-credentials');
let managerView = document.querySelector('.manager-view');
let customerView = document.querySelector('.customer-view');
let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let submitButton = document.querySelector('.submit-button')

submitButton.addEventListener('click', validateCredentials);

function validateCredentials() {
  if (usernameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    enterCredentials.classList.add('hidden');
    managerView.classList.remove('hidden');
  } else if (usernameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    enterCredentials.classList.add('hidden');
    customerView.classList.remove('hidden');
  } else {
    usernameInput.value = '';
    passwordInput.value = '';
    alert('The username and/or password you recognized was not recognized. Please try again.')
  }
}
