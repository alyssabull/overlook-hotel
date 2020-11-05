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
  debugger
  let userPromise = apiCalls.fetchUserData();
  let roomPromise = apiCalls.fetchRoomData();
  let bookingPromise = apiCalls.fetchBookingData();

  Promise.all([userPromise, roomPromise, bookingPromise])
    .then(data => hotelService = new HotelService(data[0], data[1], data[2]))
    .catch(err => console.log(err))
}

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
