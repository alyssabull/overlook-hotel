import './css/base.scss';
import HotelService from './Hotel-Service.js';

window.onload = fetchAllData();

let hotelService;
let userID;

import {bookRoomButton, customerDirectoryButton, enterCredentials, errorMessage, homeButton, hotelOverviewInfo, hotelOverviewTitle, loginButton, managerView, passwordInput, signOutButton, todayHotelOverview, usernameInput} from './DOMelements.js';

//make header buttons hidden after they work


loginButton.addEventListener('click', validateCredentials);
usernameInput.addEventListener('input', clearErrorMessage);

function fetchAllData() {
  signOutButton.disabled = true;
  let userPromise =
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
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
  todayDate = hotelService.getTodayDate();
}

function validateCredentials() {
  if (usernameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    // createUserDropDown();
    displayHotelOverview();
    enterCredentials.classList.add('hidden');
    managerView.classList.remove('hidden');
    signOutButton.disabled = false;
    bookRoomButton.classList.remove('hidden');
    customerDirectoryButton.classList.remove('hidden');
    todayHotelOverview.classList.remove('hidden');
    usernameInput.value = '';
    passwordInput.value = '';
  }
  // else if (usernameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
  //   let findUserID = usernameInput.value.split(/(\d+)/);
  //   userID = findUserID[1];
  //   loadUserPage();
  // }
  else {
    alertLogInError();
  }
}

function alertLogInError() {
  usernameInput.value = '';
  passwordInput.value = '';
  let message = `<b>The username and/or password you entered was not recognized. Please try again.</b>`
  errorMessage.insertAdjacentHTML('beforeend', message);
}

function clearErrorMessage() {
  errorMessage.innerText = '';
}

function signOut() {
  signOutButton.disabled = true;
  customerStatus.innerHTML = '';
  managerView.classList.add('hidden');
  customerView.classList.add('hidden');
  enterCredentials.classList.remove('hidden');
  clearErrorMessage();
  bookRoomHeader = 'Book a Room';
  backToBooking.innerHTML = '';
  customerRooms.innerHTML = '';
}

function displayHotelOverview() {
  let date = hotelService.getTodayDate();
  hotelOverviewTitle.innerText = `Hotel Overview for ${date}`;
  let todayRevenue = hotelService.calculateTotalRevenue(date);
  let availableRooms = hotelService.calculateNumberAvailableRooms(date);
  let percentOccupied = hotelService.calculatePercentageOccupied(date);
  let overview = `
      <b>Today Revenue:</b> &nbsp; $${todayRevenue} &nbsp; &nbsp; &nbsp; &nbsp;
      <b>Rooms Available:</b> &nbsp; ${availableRooms} &nbsp; &nbsp; &nbsp; &nbsp;
      <b>Percentage Occupied:</b> &nbsp; ${percentOccupied}%
    `;
  hotelOverviewInfo.innerHTML = overview;
  // displayTodayBookings();
}
