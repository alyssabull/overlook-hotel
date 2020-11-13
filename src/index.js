import './css/base.scss';
import apiCalls from './apiCalls';
import HotelService from './Hotel-Service.js';

window.onload = fetchAllData();

let hotelService;
let userID;

import {currentCustomerBookings, customerDirectoryButton, customerBookingSearchBar, customerNameInput, dropDown, enterCredentials, errorMessage, gridColumn, homeButton, hotelOverviewInfo, hotelOverviewTitle, loginButton, managerBookRoomDate, managerBookRoomHeader, manageCustomerBookings, managerView, managerViewCustomerBookings, passwordInput, refreshCustomerButton, searchCustomersForBookingButton, searchCustomerNameDropDown, signOutButton, todayHotelBookings, todayHotelBookingsTitle, todayHotelOverview, updateCustomerBookings, usernameInput, viewAvailableRooms, viewCustomerBookingsButton} from './DOMelements.js';

//make header buttons hidden after they work


loginButton.addEventListener('click', validateCredentials);
usernameInput.addEventListener('input', clearErrorMessage);
signOutButton.addEventListener('click', signOut);
customerDirectoryButton.addEventListener('click', displayBookARoomView);
searchCustomersForBookingButton.addEventListener('click', displayRoomSearch);
viewAvailableRooms.addEventListener('click', bookARoom);
homeButton.addEventListener('click', goHomeManagerView);
viewCustomerBookingsButton.addEventListener('click', viewCustomerBookings);
manageCustomerBookings.addEventListener('click', deleteBooking);
refreshCustomerButton.addEventListener('click', refreshCustomerDropDown);

searchCustomerNameDropDown.addEventListener('change', (event) => {
  viewCustomerBookingsButton.classList.remove('hidden');
  searchCustomersForBookingButton.classList.remove('hidden');
  searchCustomersForBookingButton.disabled = false;
  viewCustomerBookingsButton.disabled = false;
  refreshCustomerButton.disabled = false;
  console.log(searchCustomerNameDropDown.value);
})
managerBookRoomDate.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  let calendarDate = formatDate.join('/');
  // updateBookingData()
  displayAvailableRooms(calendarDate);
});

function fetchAllData() {
  if (managerView.classList.contains('hidden')) {
    signOutButton.disabled = true;
  }
  let roomsPromise = apiCalls.fetchData('rooms');
  let bookingsPromise = apiCalls.fetchData('bookings');
  let usersPromise = apiCalls.fetchData('users');

  Promise.all([roomsPromise, bookingsPromise, usersPromise])
    .then(data => hotelService = new HotelService(data[2], data[0], data[1]))
    .then(() => loadData())
    .catch(err => console.log(err))
}

function updateBookingData() {
  let bookingsPromise = apiCalls.fetchData('bookings');

  Promise.all([bookingsPromise])
    .then(data => hotelService.rawBookingData = data[0])
    .then(() => hotelService.addBookings())
    .catch(err => console.log(err))
}

function loadData() {
  hotelService.start();
}

function validateCredentials() {
  if (usernameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    createUserDropDown();
    displayHotelOverview();
    enterCredentials.classList.add('hidden');
    managerView.classList.remove('hidden');
    signOutButton.disabled = false;
    homeButton.disabled = true;
    customerDirectoryButton.classList.remove('hidden');
    todayHotelOverview.classList.remove('hidden');
    todayHotelBookings.classList.remove('hidden');
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
  customerDirectoryButton.disabled = false;
  // customerDirectoryButton.classList.add('hidden');
  // homeButton.classList.add('hidden');
  // customerStatus.innerHTML = '';
  gridColumn.innerHTML = '';
  customerNameInput.value = '';
  managerView.classList.add('hidden');
  viewAvailableRooms.classList.add('hidden');
  customerBookingSearchBar.classList.add('hidden');
  enterCredentials.classList.remove('hidden');
  todayHotelBookings.classList.add('hidden');
  clearErrorMessage();
  // bookRoomHeader = 'Book a Room';
  // backToBooking.innerHTML = '';
  // customerRooms.innerHTML = '';
}

function createUserDropDown() {
  let sortCustomerNames = hotelService.allUsers.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  })
  let customerNames = sortCustomerNames.map(user => {
    return `<option value="${user.name}">`
  }).join('');
  dropDown.insertAdjacentHTML('afterbegin', customerNames);
}

function refreshCustomerDropDown() {
  viewCustomerBookingsButton.classList.add('hidden');
  searchCustomersForBookingButton.classList.add('hidden');
  customerNameInput.value = '';
  refreshCustomerButton.disabled = true;
}

function goHomeManagerView() {
  gridColumn.innerHTML = '';
  customerNameInput.value = '';
  displayHotelOverview();
  homeButton.disabled = true;
  customerDirectoryButton.disabled = false;
  todayHotelOverview.classList.remove('hidden');
  todayHotelBookings.classList.remove('hidden');
  manageCustomerBookings.classList.add('hidden');
  customerBookingSearchBar.classList.add('hidden');
  viewAvailableRooms.classList.add('hidden');
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
  displayTodayBookings();
}

function displayTodayBookings() {
  let date = hotelService.getTodayDate();
  todayHotelBookingsTitle.innerHTML = '';
  let bookings = hotelService.findBookings(date);
  if (typeof bookings !== 'string') {
    let sortedBookings = hotelService.sortBookingsByRoomNumber(bookings);
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `<article class="manager-booking-card" id="${booking.id}">
      <br>
      <div class="grid-container">
        <div class="grid-item">${booking.date}</div>
        <div class="grid-item">${booking.guestName}</div>
        <div class="grid-item">${booking.roomType.toUpperCase()}</div>
        <div class="grid-item">${booking.roomNumber}</div>
        <div class="grid-item">${booking.bedSize.toUpperCase()}</div>
        <div class="grid-item">$${booking.costPerNight.toFixed(2)}</div>
        <div class="grid-item">${booking.id}</div>
      </div>`
    }).join(' ')
    todayHotelBookings.insertAdjacentHTML('beforeend', todaysBookingInfo);
    todayHotelBookingsTitle.innerText = `Bookings for ${date}`;
  } else {
    todayHotelBookingsTitle.innerText = 'Bookings for --';
    todayHotelBookings.innerHTML = `<h5 class="no-bookings">${bookings}</h5>`;
  }
}

function displayBookARoomView() {
  refreshCustomerButton.disabled = true;
  homeButton.disabled = false;
  customerDirectoryButton.disabled = true;
  viewCustomerBookingsButton.classList.add('hidden');
  searchCustomersForBookingButton.classList.add('hidden');
  todayHotelOverview.classList.add('hidden');
  todayHotelBookings.classList.add('hidden');
  customerBookingSearchBar.classList.remove('hidden');
}

function displayRoomSearch() {
  updateCustomerBookings.innerHTML = '';
  viewCustomerBookingsButton.disabled = false;
  manageCustomerBookings.classList.add('hidden');
  userID = hotelService.findUserId(customerNameInput.value);
  viewAvailableRooms.classList.remove('hidden');
  managerBookRoomHeader.innerText = `Book a Room for ${customerNameInput.value} on`;
  searchCustomersForBookingButton.disabled = true;
}

function displayAvailableRooms(date) {
  viewAvailableRooms.classList.remove('hidden');
  manageCustomerBookings.classList.remove('hidden');
  let gridColumn = document.getElementById('grid-column');
  gridColumn.innerHTML = '';
  let availableRooms = hotelService.findAvailableRooms(date);
  if (typeof availableRooms !== 'string') {
    let sortedAvailableRooms = hotelService.sortBookingsByDate(availableRooms);
    let allRooms = sortedAvailableRooms.map(room => {
      return `
      <div class="grid-row">
        <div class="grid-item">${room.roomType.toUpperCase()}</div>
        <div class="grid-item">${room.number}</div>
        <div class="grid-item">${room.bedSize.toUpperCase()}</div>
        <div class="grid-item">${room.bidet.toString().toUpperCase()}</div>
        <div class="grid-item">$${room.costPerNight.toFixed(2)}</div>
        <div class="grid-item">
        <button type="button" class="book-room ${room.number}" id="button-${room.number}">BOOK ROOM</button></div>
      </div>`
    }).join(' ')
    gridColumn.insertAdjacentHTML('beforeend', allRooms);
  } else {
    gridColumn.innerHTML = `<h5 class="no-bookings">${availableRooms}</h5>`;
  }
}

function bookARoom(event) {
  if (event.target.classList.contains('book-room')) {
    let roomNumber = event.target.classList[1];
    let calendarDate = managerBookRoomDate.value;
    let bookingDate = calendarDate.split('-').join('/');
    let newBooking = hotelService.addNewBooking(userID, bookingDate, roomNumber);
    postNewBooking(newBooking, roomNumber);
  }
}

function postNewBooking(newBooking, roomNumber) {
  let onSuccess = () => {
    let bookedButton = document.getElementById(`button-${roomNumber}`)
    bookedButton.innerText = 'BOOKED!';
    bookedButton.disabled = true;
    updateBookingData();
  }
  apiCalls.postData(newBooking, onSuccess);
}

function viewCustomerBookings() {
  refreshCustomerButton.disabled = false;
  let customerBookingsHeader = document.querySelector('.customer-bookings-header');
  let username = searchCustomerNameDropDown.value;
  customerBookingsHeader.innerText = `Bookings for ${username}`;
  displayCustomerBookingsSection();
  let userID = hotelService.findUserId(username);
  let bookings = hotelService.findCustomerBookings(userID);
  let sortedBookings = hotelService.sortBookingsByDate(bookings);
  (console.log('bookings num', sortedBookings.length))
  if (sortedBookings.length > 0) {
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `
      <div class="grid-row" id="${booking.id}">
        <div class="grid-item">${booking.date}</div>
        <div class="grid-item">${booking.id}</div>
        <div class="grid-item">${booking.roomType.toUpperCase()}</div>
        <div class="grid-item">${booking.roomNumber}</div>
        <div class="grid-item">${booking.bedSize.toUpperCase()}</div>
        <div class="grid-item">${booking.bidet.toString().toUpperCase()}</div>
        <div class="grid-item">$${booking.costPerNight.toFixed(2)}</div>
        <div class="grid-item"><button type="button" class="delete-booking-button ${booking.id} ${typeof booking.id}" id="room-${booking.id}">DELETE BOOKING</button></div>
      </div>`
    }).join(' ')
    updateCustomerBookings.insertAdjacentHTML('beforeend', todaysBookingInfo);
  }
}

function displayCustomerBookingsSection() {
  refreshCustomerButton.disabled = false;
  updateCustomerBookings.innerHTML = `<div class="grid-container" id="current-customer-bookings">`;
  viewCustomerBookingsButton.disabled = true;
  searchCustomersForBookingButton.disabled = false;
  manageCustomerBookings.classList.remove('hidden');
  viewAvailableRooms.classList.add('hidden');
}

function deleteBooking(event) {
  let onSuccess = () => {
    updateDeletedBookings(event.target.classList[1]);
  }
  let deleteBody;
  if (event.target.classList[2] === 'number') {
    deleteBody = {id: parseInt(event.target.classList[1])}
  } else {
    deleteBody = {id: event.target.classList[1]};
  }
  if (event.target.classList.contains('delete-booking-button')) {
    apiCalls.deleteData(deleteBody, onSuccess);
    updateBookingData();
  }
}

function updateDeletedBookings(bookingID) {
  console.log('num bookings', hotelService.allBookings.length)
  fadeOutEffect(bookingID);
}

function fadeOutEffect(bookingID) {
  let fadeTarget = document.getElementById(bookingID);
  let fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      document.getElementById(bookingID).remove();
    }
  }, 100);
}
