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
let signOutButton = document.querySelector('.signout-button');
let hotelOverviewDate = document.querySelector('.hotel-overview-date');
let overviewInfo = document.querySelector('#overview-info');
let viewBookingInfo = document.querySelector('.view-information');
let searchTitle = document.querySelector('.search-title');
let searchCustomerInput = document.querySelector('.search-customer-name');
let searchCustomerButton = document.querySelector('#search-customer-button');
let bookingModal = document.querySelector('#add-booking-modal');
let modalContent = document.querySelector('#modal-content');
let modalDate = document.querySelector('.modal-date');
let modalTitle = document.querySelector('.modal-title');
let customerWelcome = document.querySelector('.customer-welcome');
let customerStatus = document.querySelector('.customer-status');

window.onload = fetchAllData();
window.addEventListener('click', handleModal);

let hotelService;
let todayDate;
let userID;
let modal;

submitButton.addEventListener('click', validateCredentials);
usernameInput.addEventListener('input', clearErrorMessage);
hotelOverviewDate.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayHotelOverview(todayDate);
  displayTodayBookings(todayDate);
});
searchCustomerButton.addEventListener('click', displayCustomerInfo);
window.addEventListener('click', openModal);
bookingModal.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayAvailableRooms(todayDate);
});
viewBookingInfo.addEventListener('click', deleteBooking);
signOutButton.addEventListener('click', signOut);

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
    signOutButton.classList.remove('hidden');
    usernameInput.value = '';
    passwordInput.value = '';
  } else if (usernameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    let findUserID = usernameInput.value.split(/(\d+)/);
    userID = findUserID[1];
    hotelService.allUsers.forEach(user => {
      if(user.id == userID) {
        enterCredentials.classList.add('hidden');
        customerView.classList.remove('hidden');
        signOutButton.classList.remove('hidden');
        loadCustomerInfo();
        usernameInput.value = '';
        passwordInput.value = '';
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

function signOut() {
  signOutButton.classList.add('hidden');
  managerView.classList.add('hidden');
  enterCredentials.classList.remove('hidden');
}

function loadCustomerInfo() {
  let status;
  customerWelcome.innerText = `Welcome Back, ${hotelService.findUserName(userID)}!`
  let totalSpent = hotelService.calculateTotalSpent(userID);
  let numStays = hotelService.calculateNumberOfStays(userID);
  if (totalSpent > 10000) {
    status = 'Gold';
  } else if (totalSpent < 10000 && totalSpent > 8000) {
    status = 'Silver';
  } else if (totalSpent < 8000 && totalSpent > 5000) {
    status = 'Bronze';
  } else {
    status = 'Blue';
  }
  let statusInfo = `
  <p class="${status}"><b>${status} Status</b></p>
  <p>Total Spent: $${totalSpent}</p>
  <p>Number of Stays: ${numStays}</p>`
  customerStatus.insertAdjacentHTML('afterbegin', statusInfo);
}

function displayHotelOverview(date) {
  let todayRevenue = hotelService.calculateTotalRevenue(date);
  let availableRooms = hotelService.calculateNumberAvailableRooms(date);
  let percentOccupied = hotelService.calculatePercentageOccupied(date);
  let overview = `Revenue &nbsp; $${todayRevenue} <br>
  Rooms Available &nbsp; ${availableRooms} <br>
  Percentage Occupied &nbsp; ${percentOccupied}%`;
  overviewInfo.classList.remove('overview-default');
  overviewInfo.classList.add('hotel-summary');
  overviewInfo.innerHTML = overview;
}

function displayTodayBookings(date) {
  viewBookingInfo.innerHTML = '';
  searchTitle.innerHTML = '';
  let bookings = hotelService.findBookings(date);
  if (typeof bookings !== 'string') {
    let sortedBookings = hotelService.sortBookingsByRoomNumber(bookings);
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `<article class="today-booking-card">
      <section class="booking-info">
        <p class="room-type">${booking.roomType}</p>
        <p class="confirmation-number"><b>Confirmation:</b> ${booking.id}</p>
        <p class="room-number"><b>Room Number:</b> ${booking.roomNumber}</p>
        <p class="stay-date"><b>Date Booked:</b> ${booking.date}</p>
        <p class="customer-name"><b>Guest Name:</b> ${booking.guestName}</p>
      </section>
      <section class="delete-booking">
        <p class="room-price">$${booking.costPerNight.toFixed(2)}</p>
        <button type="button" class="delete-booking-button delete" data-confirm="Are you sure you want to delete this booking?">DELETE BOOKING</button>
      </section>
      </article>`
    }).join(' ')
    viewBookingInfo.insertAdjacentHTML('beforeend', todaysBookingInfo);
    searchTitle.innerText = `Bookings for ${date}`;
  } else {
    searchTitle.innerText = 'Bookings for --';
    viewBookingInfo.innerHTML = `<h5 class="no-bookings">${bookings}</h5>`;
  }
}

function displayCustomerInfo() {
  viewBookingInfo.innerHTML = '';
  userID = hotelService.findUserId(searchCustomerInput.value);
  let bookings = hotelService.findCustomerBookings(userID);
  let sortedBookings = hotelService.sortBookingsByDate(bookings);
    if (sortedBookings.length > 0) {
      let todaysBookingInfo = sortedBookings.map(booking => {
        return `<article class="today-booking-card">
        <section class="booking-info">
          <p class="room-type">${booking.roomType}</p>
          <p class="confirmation-number"><b>Confirmation:</b> ${booking.id}</p>
          <p class="room-number"><b>Room Number:</b> ${booking.roomNumber}</p>
          <p class="stay-date"><b>Date Booked:</b> ${booking.date}</p>
          <p class="customer-name"><b>Guest Name:</b> ${booking.guestName}</p>
        </section>
        <section class="delete-booking">
          <p class="room-price">$${booking.costPerNight.toFixed(2)}</p>
          <button type="button" class="delete-booking-button ${booking.id} ${typeof booking.id}">DELETE BOOKING</button>
        </section>
        </article>`
      }).join(' ')
      searchTitle.innerText = `Bookings for ${searchCustomerInput.value}`;
      searchTitle.insertAdjacentHTML('beforeend', `<p id="total-spent">Total Spent: $ ${hotelService.calculateTotalSpent(userID).toFixed(2)} <br><button class="add-booking-button">ADD BOOKING</button>`)
      viewBookingInfo.insertAdjacentHTML('beforeend', todaysBookingInfo);
    } else {
      searchTitle.innerText = `Bookings for ${searchCustomerInput.value}`;
      viewBookingInfo.innerHTML = `<p class="customer-error-message"><b>We have no information for the customer \'${searchCustomerInput.value}\'. Please enter another name and try again.</b></p>`;
    }
    searchCustomerInput.value = '';
  }

  function displayAvailableRooms(date) {
    let availableRooms = hotelService.findAvailableRooms(date);
    let sortedAvailableRooms = hotelService.sortBookingsByDate(availableRooms);
    let allRooms = sortedAvailableRooms.map(room => {
      return `<article class="today-booking-card">
      <section class="booking-info">
        <p class="room-type">${room.roomType}</p>
        <p class="room-number"><b>Room Number:</b> ${room.number}</p>
        <p class="stay-date"><b>Bidet:</b> ${room.bidet}</p>
        <p class="customer-name"><b>Bed Type:</b> ${room.bedSize}</p>
        <p class="customer-name"><b>Number of Beds: </b> ${room.numBeds}</p>
      </section>
      <section class="delete-booking">
        <p class="room-price">$${room.costPerNight.toFixed(2)}</p>
        <button type="button" class="book-room ${room.number}">BOOK ROOM</button>
      </section>
      </article>`
    }).join(' ')

   modalContent.insertAdjacentHTML('afterbegin', allRooms);
  }

  function openModal(event) {
    if (event.target.classList.contains('add-booking-button')) {
      modal = bookingModal;
      modal.style.display = 'block';
      modalDate.classList.remove('hidden');
      modalTitle.innerText = 'Available Rooms';
      modalContent.innerText = '';
    } else if (event.target.classList.contains('delete-booking-button')) {
      modal = bookingModal;
      modalDate.classList.add('hidden');
      modalTitle.innerText = 'Confirmation';
      modalContent.innerText = 'Your booking has successfully been deleted. Please refresh the page to update the bookings.';
      modal.style.display = 'block';
    }
  }

  function handleModal(event) {
    if (event.target.classList.contains('book-room')) {
      let newBooking = hotelService.addNewBooking(userID, todayDate, event.target.classList[1]);
      postNewBooking(newBooking);
      modalDate.classList.add('hidden');
      modalTitle.innerText = 'Success';
      modalContent.innerText = 'The booking has successfully been added. Please refresh the page to see the updated bookings.';
    } else if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  function postNewBooking(newBooking) {
    if (typeof newBooking !== 'string') {
      return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBooking)
      })
      .then(response => response.json())
      .then(json => {
        fetchAllData();
      })
      .catch(err => console.log(err))
    } else {
      modalContent.innerHTML = '';
      modalContent.insertAdjacentHTML('beforeend', `<p class="error-message">${newBooking}</p>`);
    }
  }

  function deleteBooking(event) {
    let deleteBody;
    if (event.target.classList[2] === 'number') {
      deleteBody = {id: parseInt(event.target.classList[1])}
    } else {
      deleteBody = {id: event.target.classList[1]};
    }
    if (event.target.classList.contains('delete-booking-button')) {
      return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteBody)
      })
      .then(response => response.json())
      .then(json => fetchAllData())
      .catch(err => console.log(err))
    }
  }
