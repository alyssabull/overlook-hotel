import './css/base.scss';
import './images/room0.jpg'
import './images/room1.jpg'
import './images/room2.jpg'
import './images/room3.jpg'
import './images/room4.jpg'
import './images/room5.jpg'
import './images/room6.jpg'
import './images/room7.jpg'
import './images/room8.jpg'
import './images/room9.jpg'
import './images/room10.jpg'
import './images/room11.jpg'
import './images/room12.jpg'
import './images/room13.jpg'
import './images/room14.jpg'
import './images/room15.jpg'
import './images/room16.jpg'
import HotelService from './Hotel-Service.js';

import {backToBooking, bookARoom, bookingModal, bookRoomDate, bookRoomHeader, customerRooms, customerStatus, customerView, customerWelcome, enterCredentials, errorMessage, filterCategories, filterRefreshButton, filterSection, filterSubmitButton, hotelOverviewDate, managerView, modalContent, modalDate, modalTitle, overviewInfo, passwordInput, searchCustomerButton, searchCustomerInput, searchTitle, signOutButton, submitButton, usernameInput, viewBookingInfo} from './DOMelements.js';

window.onload = fetchAllData();

let hotelService;
let modal;
let todayDate;
let userID;

backToBooking.addEventListener('click', backToCustomerBooking);
bookARoom.addEventListener('click', customerAddBookings)
customerStatus.addEventListener('click', displayCustomerBookings);
filterSection.addEventListener('click', refreshFilter);
filterSubmitButton.addEventListener('click', getFilterValue);
searchCustomerButton.addEventListener('click', displayCustomerInfo);
signOutButton.addEventListener('click', signOut);
submitButton.addEventListener('click', validateCredentials);
usernameInput.addEventListener('input', clearErrorMessage);
viewBookingInfo.addEventListener('click', deleteBooking);
window.addEventListener('click', openModal);
window.addEventListener('click', handleModal);
bookRoomDate.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayCustomerRooms(todayDate);
});
bookingModal.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayManagerRooms(todayDate);
});
hotelOverviewDate.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayHotelOverview(todayDate);
  displayTodayBookings(todayDate);
});


function getRandomIndex() {
  return Math.floor(Math.random() * 10);
}

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
  todayDate = hotelService.getTodayDate();
}

function validateCredentials() {
  if (usernameInput.value === 'manager' && passwordInput.value === 'overlook2020') {
    createUserDropDown();
    enterCredentials.classList.add('hidden');
    managerView.classList.remove('hidden');
    signOutButton.classList.remove('hidden');
    usernameInput.value = '';
    passwordInput.value = '';
  } else if (usernameInput.value.includes('customer') && passwordInput.value === 'overlook2020') {
    let findUserID = usernameInput.value.split(/(\d+)/);
    userID = findUserID[1];
    loadUserPage();
  } else {
    alertLogInError();
  }
}

function loadUserPage() {
  hotelService.allUsers.forEach(user => {
    if (user.id == userID) {
      enterCredentials.classList.add('hidden');
      customerView.classList.remove('hidden');
      signOutButton.classList.remove('hidden');
      filterCategories.classList.add('hidden');
      filterSubmitButton.classList.add('hidden');
      todayDate = hotelService.getDashedTodayDate();
      bookRoomDate.setAttribute('value', todayDate);
      bookRoomDate.setAttribute('min', todayDate);
      loadCustomerInfo();
      usernameInput.value = '';
      passwordInput.value = '';
    } else {
      alertLogInError();
    }
  })
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

function createUserDropDown() {
  let dropDown = document.getElementById('customers');
  let sortCustomerNames = hotelService.allUsers.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  })
  let customerNames = sortCustomerNames.map(user => {
    return `<option value="${user.name}">`
  }).join('');
  dropDown.insertAdjacentHTML('afterbegin', customerNames);
}

function signOut() {
  signOutButton.classList.add('hidden');
  managerView.classList.add('hidden');
  customerView.classList.add('hidden');
  enterCredentials.classList.remove('hidden');
  bookRoomHeader = 'Book a Room';
  backToBooking.innerHTML = '';
  customerRooms.innerHTML = '';
  customerStatus.innerHTML = '';
  clearErrorMessage();
}

function loadCustomerInfo() {
  let status;
  customerWelcome.innerText = `Welcome Back, ${hotelService.findUserName(userID)}!`
  let totalSpent = hotelService.calculateTotalSpent(userID).toFixed(2);
  if (totalSpent > 10000) {
    status = 'Gold';
  } else if (totalSpent < 10000 && totalSpent > 8000) {
    status = 'Silver';
  } else if (totalSpent < 8000 && totalSpent > 5000) {
    status = 'Bronze';
  } else {
    status = 'Blue';
  }
  displayCustomerStats(status, totalSpent)
}

function displayCustomerStats(status, totalSpent) {
  let statusInfo = `
  <p class="${status}"><b>${status} Level Preferred</b></p>
  <p>Total Spent: $${totalSpent}</p><button class="view-bookings-button customer-status">View Bookings</button>`;
  customerStatus.insertAdjacentHTML('afterbegin', statusInfo);
}

function displayHotelOverview(date) {
  console.log(date)
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
      return `<article class="manager-booking-card" id="${booking.id}">
      <section class="manager-booking-date">
        ${booking.date}
      </section>
      <section class="manager-booking-roomtype">
        ${booking.roomType.toUpperCase()}
      </section>
      <section class="manager-booking-roomnum">
        ${booking.roomNumber}
      </section>
      <section class="manager-booking-cost">
        $${booking.costPerNight.toFixed(2)}
      </section>
      <section class="manager-booking-id">
        ${booking.id}
      </section>
        ${determineBookingDate(booking)}
      </article>`
    }).join(' ')
    viewBookingInfo.insertAdjacentHTML('beforeend', todaysBookingInfo);
    searchTitle.innerText = `Bookings for ${date}`;
  } else {
    searchTitle.innerText = 'Bookings for --';
    viewBookingInfo.innerHTML = `<h5 class="no-bookings">${bookings}</h5>`;
  }
}

function determineBookingDate(booking) {
  console.log('bookingdate', booking.date);
  console.log('hotelservice date', hotelService.getTodayDate());
  if (booking.date > hotelService.getTodayDate()) {
    return `<button type="button" class="delete-booking-button ${booking.id} ${typeof booking.id}">DELETE BOOKING</button>`
  } else {
    return '<button type="button" class="cannot-delete">-</button>';
  }
}

function displayCustomerInfo() {
  viewBookingInfo.innerHTML = '';
  userID = hotelService.findUserId(searchCustomerInput.value);
  let bookings = hotelService.findCustomerBookings(userID);
  let sortedBookings = hotelService.sortBookingsByDate(bookings);
  if (sortedBookings.length > 0) {
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `<article class="manager-booking-card">
        <section class="manager-booking-date">
          ${booking.date}
        </section>
        <section class="manager-booking-roomtype">
          ${booking.roomType.toUpperCase()}
        </section>
        <section class="manager-booking-roomnum">
          ${booking.roomNumber}
        </section>
        <section class="manager-booking-cost">
          $${booking.costPerNight.toFixed(2)}
        </section>
        <section class="manager-booking-id">
          ${booking.id}
        </section>
          ${determineBookingDate(booking)}
        </section>
        </article>`
    }).join(' ')
    viewBookingInfo.insertAdjacentHTML('beforeend', todaysBookingInfo);
    formatCustomerInfo();
  } else {
    searchTitle.innerText = `Bookings for ${searchCustomerInput.value}`;
    viewBookingInfo.innerHTML = `<p class="customer-error-message"><b>We have no information for the customer ${searchCustomerInput.value}. Please enter another name and try again.</b></p>`;
  }
}

function formatCustomerInfo() {
  searchTitle.innerText = `Bookings for ${searchCustomerInput.value}`;
  searchTitle.insertAdjacentHTML('beforeend', `<p id="total-spent">Total Spent: $ ${hotelService.calculateTotalSpent(userID).toFixed(2)} <br><button class="add-booking-button">ADD BOOKING</button>`)
  searchCustomerInput.value = '';
}

function displayManagerRooms(date) {
  let availableRooms = hotelService.findAvailableRooms(date);
  if (typeof availableRooms !== 'string') {
    let sortedAvailableRooms = hotelService.sortBookingsByDate(availableRooms);
    modalContent.innerHTML = `
      <ul class="customer-info-headers">
        <li>Room Type</li>
        <li>Num Beds</li>
        <li>Bed Type</li>
        <li>Room #</li>
        <li>Bidet</li>
        <li>Price</li>
        <li>Add</li>
      </ul>`
    let allRooms = sortedAvailableRooms.map(room => {
      return `
        <article class="manager-booking-card">
          <p class="manager-booking-roomtype2">${room.roomType}</p>
          <p class="manager-booking-numbeds"> ${room.numBeds}</p>
          <p class="manager-booking-roomnum">${room.bedSize}</p>
          <p class="manager-booking-roomnum2">${room.number}</p>
          <p class="manager-booking-bidet"> ${room.bidet}</p>
          <p class="manager-booking-cost2">$${room.costPerNight.toFixed(2)}</p>
          <button type="button" class="book-room ${room.number}">BOOK ROOM</button>
        </article>`
    }).join(' ')
    modalContent.insertAdjacentHTML('beforeend', allRooms);
  } else {
    modalContent.innerHTML = `<h5 class="no-bookings">${availableRooms}</h5>`;
  }
}

function openModal(event) {
  if (event.target.classList.contains('add-booking-button')) {
    modal = bookingModal;
    modal.style.display = 'block';      modalDate.classList.remove('hidden');
    modalTitle.innerText = 'Available Rooms';
    modalContent.innerHTML = `
      <ul class="customer-info-headers">
        <li>Room Type</li>
        <li>Num Beds</li>
        <li>Bed Type</li>
        <li>Room #</li>
        <li>Bidet</li>
        <li>Price</li>
        <li>Add</li>
      </ul>`;
  } else if (event.target.classList.contains('delete-booking-button')) {
    event.target.classList.add('deleted-room');
    event.target.disabled = true;
    event.target.innerText = 'DELETED!'
  }
}

function handleModal(event) {
  if (event.target.classList.contains('book-room')) {
    let newBooking = hotelService.addNewBooking(userID, todayDate, event.target.classList[1]);
    let eventTarget = event.target;
    postNewBooking(newBooking, eventTarget);
    modalDate.classList.add('hidden');
    modalTitle.innerText = 'Success';
    modalContent.innerText = 'The booking has successfully been added. Please refresh the page to see the updated bookings.';
  } else if (event.target === modal) {
    modal.style.display = 'none';
  }
}

function postNewBooking(newBooking) {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBooking)
  })
    .then(response => console.log(response.json()))
    .then(() => {
      fetchAllData();
    })
    .catch(err => console.log(err))
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
      .then(response => console.log(response.json()))
      .then(() => updateBookings(event.target.classList[1]))
      .catch(err => console.log(err))
  }
}

function updateBookings(id) {
  fetchAllData();
  setTimeout(removeElement(id), 4000)
}

function removeElement(bookingID) {
  document.getElementById(bookingID).remove();
}

function displayCustomerRooms(date) {
  fetchAllData();
  filterCategories.classList.remove('hidden');
  filterSubmitButton.classList.remove('hidden');
  bookRoomHeader.innerText = `All Available Rooms`;
  let availableRooms = hotelService.findAvailableRooms(date);
  if (typeof availableRooms !== 'string') {
    let sortedAvailableCustRooms = hotelService.sortBookingsByDate(availableRooms);
    let allRooms = sortedAvailableCustRooms.map(room => {
      return `
        <article class="today-booking-card">
          <img src="./images/room${getRandomIndex()}.jpg" alt="room picture" class="booking-card-img">
          <section class="booking-info">
            <p class="room-type">${room.roomType}</p>
            <p class="room-number"><b>Room Number:</b> ${room.number}</p>
            <p class="stay-date"><b>Bidet:</b> ${room.bidet}</p>
            <p class="customer-name"><b>Bed Type:</b> ${room.bedSize}</p>
            <p class="customer-name"><b>Number of Beds: </b> ${room.numBeds}</p>
          </section>
          <section class="customer-booking">
            <p class="customer-price">$${room.costPerNight.toFixed(2)}</p>
            <button type="button" class="customer-book-button ${room.number}">BOOK ROOM</button>
          </section>
        </article>`
    }).join(' ')
    customerRooms.insertAdjacentHTML('afterbegin', allRooms);
  } else {
    customerRooms.innerText = `${availableRooms}`;
  }
}

function customerAddBookings(event) {
  if (event.target.classList.contains('customer-book-button')) {
    let newBooking = hotelService.addNewBooking(userID, todayDate, event.target.classList[1]);
    customerStatus.innerHTML = ''
    postNewBooking(newBooking);
    loadCustomerInfo();
    event.target.classList.remove('customer-book-button');
    event.target.classList.add('booked-room');
    event.target.innerText = 'BOOKED!';
    event.target.disabled = true;
  }
}

function displayCustomerBookings(event) {
  if (event.target.classList.contains('view-bookings-button')) {
    customerRooms.innerHTML = '';
    bookRoomDate.classList.add('hidden');
    bookRoomHeader.innerText = `Your Bookings`;
    backToBooking.insertAdjacentHTML('beforeend', `<button class="back-to-book-button">Book a Room</button>`);
    let bookings = hotelService.findCustomerBookings(userID);
    let sortedBookings = hotelService.sortBookingsByDate(bookings);
    if (sortedBookings.length > 0) {
      let todaysBookingInfo = sortedBookings.map(booking => {
        return `
        <article class="today-booking-card">
          <img src="./images/room${getRandomIndex()}.jpg" alt="room picture" class="booking-card-img">
          <section class="booking-info">
            <p class="room-type">${booking.roomType}</p>
            <p class="room-number"><b>Room Number:</b> ${booking.roomNumber}</p>
            <p class="stay-date"><b>Date Booked:</b> ${booking.date}</p>
            <p class="confirmation-number"><b>Confirmation:</b>${booking.id}</p>
          </section>
          <section class="delete-booking">
            <p class="room-price">$${booking.costPerNight.toFixed(2)}</p>
          </section>
          </article>`
      }).join(' ')
      customerRooms.insertAdjacentHTML('beforeend', todaysBookingInfo);
    }
  }
  document.querySelector('.view-bookings-button').disabled = true;
}

function backToCustomerBooking() {
  customerRooms.innerHTML = '';
  bookRoomDate.classList.remove('hidden');
  bookRoomHeader.innerText = 'Book a Room';
  backToBooking.innerHTML = '';
  document.querySelector('.view-bookings-button').disabled = false;
}

function getFilterValue() {
  let calendarDate = document.getElementById('book-room-date').value;
  let formatCalendarDate = calendarDate.split('-').join('/');
  let availableRooms = hotelService.findAvailableRooms(formatCalendarDate);
  let sortedAvailableCustRooms = hotelService.sortBookingsByDate(availableRooms);
  customerRooms.innerHTML = '';
  if (filterCategories.elements[0].value === 'residential') {
    let residentialSuites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'residential suite');
    formatFilteredView('Residential Suites', residentialSuites);
  } else if (filterCategories.elements[1].value === 'suite') {
    let suites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'suite');
    formatFilteredView('Suites', suites);
  } else if (filterCategories.elements[2].value === 'junior') {
    let juniorSuites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'junior suite');
    formatFilteredView('Junior Suites', juniorSuites);
  } else if (filterCategories.elements[3].value === 'single') {
    let singleRooms = hotelService.filterRoomByType(sortedAvailableCustRooms, 'single room');
    formatFilteredView('Single Rooms', singleRooms);
  }
  clearFormValues();
}


function formatFilteredView(roomType, sortedRooms) {
  displayFilteredRooms(sortedRooms);
  bookRoomHeader.innerText = `Available ${roomType}`;
  filterCategories.classList.add('hidden');
  filterSubmitButton.classList.add('hidden');
  filterRefreshButton.classList.remove('hidden');
}

function clearFormValues() {
  filterCategories.elements['residential'].checked = false;
  filterCategories.elements['suite'].checked = false;
  filterCategories.elements['junior'].checked = false;
  filterCategories.elements['single'].checked = false;
}

function displayFilteredRooms(rooms) {
  customerRooms.innerText = '';
  let sortedFilteredRooms = hotelService.sortBookingsByDate(rooms);
  let allRooms = sortedFilteredRooms.map(room => {
    return `<article class="today-booking-card">
    <img src="./images/room${getRandomIndex()}.jpg" alt="room picture" class="booking-card-img">
    <section class="booking-info">
      <p class="room-type">${room.roomType}</p>
      <p class="room-number"><b>Room Number:</b> ${room.number}</p>
      <p class="stay-date"><b>Bidet:</b> ${room.bidet}</p>
      <p class="customer-name"><b>Bed Type:</b> ${room.bedSize}</p>
      <p class="customer-name"><b>Number of Beds: </b> ${room.numBeds}</p>
    </section>
    <section class="customer-booking">
      <p class="customer-price">$${room.costPerNight.toFixed(2)}</p>
      <button type="button" class="customer-book-button ${room.number}">BOOK ROOM</button>
    </section>
    </article>`
  }).join(' ')

  customerRooms.insertAdjacentHTML('afterbegin', allRooms);
}

function refreshFilter(event) {
  if (event.target.classList.contains('filter-status')) {
    customerRooms.innerText = '';
    let calendarDate = document.getElementById('book-room-date').value;
    let formatCalendarDate = calendarDate.split('-').join('/');
    displayCustomerRooms(formatCalendarDate);
    filterCategories.classList.remove('hidden');
    filterRefreshButton.classList.add('hidden');
    filterSubmitButton.classList.remove('hidden');
  }
}
