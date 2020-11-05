import './css/base.scss';
import apiCalls from './apiCalls.js';
import HotelService from './Hotel-Service.js';

let enterCredentials = document.querySelector('.enter-credentials');
let errorMessage = document.querySelector('.error-message');
let managerView = document.querySelector('.manager-view');
let customerView = document.querySelector('.customer-view');
let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let submitButton = document.querySelector('.submit-button');
let hotelOverviewDate = document.querySelector('.hotel-overview-date');
let overviewInfo = document.querySelector('#overview-info');
let viewBookingInfo = document.querySelector('.view-information');

window.onload = fetchAllData();

let hotelService;
let todayDate;

submitButton.addEventListener('click', validateCredentials);
usernameInput.addEventListener('input', clearErrorMessage);
hotelOverviewDate.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayHotelOverview(todayDate);
  displayTodayBookings(todayDate);
})

function fetchAllData() {
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
  let message = `<b>The username and/or password you recognized was not recognized. Please try again.</b>`
  errorMessage.insertAdjacentHTML('beforeend', message);
}

function clearErrorMessage() {
  errorMessage.innerText = '';
}

function displayHotelOverview(date) {
  let todayRevenue = hotelService.calculateTotalRevenue(date);
  let availableRooms = hotelService.calculateNumberAvailableRooms(date);
  let percentOccupied = hotelService.calculatePercentageOccupied(date);
  let overview = `Today's Revenue $${todayRevenue} &nbsp;&nbsp;&nbsp;&nbsp;
  Rooms Available Today ${availableRooms} &nbsp;&nbsp;&nbsp;&nbsp;
  Percentage Occupied ${percentOccupied}%`;
  overviewInfo.innerHTML = overview;
}

function displayTodayBookings(date) {
  viewBookingInfo.innerHTML = '';
  let bookings = hotelService.findBookings(date);
  if (typeof bookings !== 'string') {
    let todaysBookingInfo = bookings.map(booking => {
      return `<article class="today-booking-card">
      <section class="booking-info">
        <p class="room-type">${booking.roomType}</p>
        <p class="confirmation-number"><b>Confirmation:</b> ${booking.id}</p>
        <p class="room-number"><b>Room Number:</b> ${booking.roomNumber}</p>
        <p class="stay-date"><b>Date Booked:</b> ${booking.date}</p>
        <p class="customer-name"><b>Guest Name:</b> ${booking.guestName}</p>
      </section>
      <section class="delete-booking">
        <p class="room-price">$${booking.costPerNight}</p>
        <button type="button" class="delete-booking-button">DELETE BOOKING</button>
      </section>
      </article>`
    }).join(' ')
    viewBookingInfo.insertAdjacentHTML('beforeend', todaysBookingInfo);
  } else {
    viewBookingInfo.innerHTML = `<h5 class="no-bookings">${bookings}</h5>`;
  }

}
