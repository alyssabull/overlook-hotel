import './css/base.scss';
import apiCalls from './apiCalls.js';
import HotelService from './Hotel-Service.js';

let enterCredentials = document.querySelector('.enter-credentials');
let managerView = document.querySelector('.manager-view');
let customerView = document.querySelector('.customer-view');
let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let submitButton = document.querySelector('.submit-button')

window.onload = fetchAllData();

submitButton.addEventListener('click', validateCredentials);

let hotelService;

function fetchAllData() {
  let userPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(response => response.json())
    .then(data => data.users)
    .catch(err => console.log(err))
  let roomPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(err => console.log(err))
  let bookingPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(err => console.log(err))

  Promise.all([userPromise, roomPromise, bookingPromise])
    .then(data => hotelService = new HotelService(data[0], data[1], data[2]))
    .then(() => loadData())
    .catch(err => console.log(err))
}

function loadData() {
  hotelService.start();
}

function validateCredentials() {
  if (usernameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    enterCredentials.classList.add('hidden');
    managerView.classList.remove('hidden');
  } else if (usernameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    let findUserID = usernameInput.value.split(/(\d+)/);
    let userID = findUserID[1];
    hotelService.allUsers.forEach(user => {
      if(user.id == userID) {
        enterCredentials.classList.add('hidden');
        customerView.classList.remove('hidden');
      } else {
        alertLogInError();
      }
    })
  } else {
    alertLogInError();
  }
}

function alertLogInError() {
  usernameInput.value = '';
  passwordInput.value = '';
  let errorMessage = `<p class="error-message">The username and/or password you recognized was not recognized. Please try again.</p>`
  enterCredentials.insertAdjacentHTML('beforeend', errorMessage);
}
