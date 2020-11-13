import './css/base.scss';
import HotelService from './Hotel-Service.js';

window.onload = fetchAllData();

let hotelService;
let userID;

import {currentCustomerBookings, customerDirectoryButton, customerBookingSearchBar, dropDown, enterCredentials, errorMessage, gridColumn, homeButton, hotelOverviewInfo, hotelOverviewTitle, loginButton, managerBookRoomDate, managerBookRoomHeader, manageCustomerBookings, managerView, passwordInput, searchCustomersForBookingButton, searchCustomerNameDropDown, signOutButton, todayHotelBookings, todayHotelBookingsTitle, todayHotelOverview, usernameInput, viewAvailableRooms, viewCustomerBookingsButton} from './DOMelements.js';

//make header buttons hidden after they work


loginButton.addEventListener('click', validateCredentials);
usernameInput.addEventListener('input', clearErrorMessage);
signOutButton.addEventListener('click', signOut);
customerDirectoryButton.addEventListener('click', displayBookARoomView);
searchCustomersForBookingButton.addEventListener('click', displayRoomSearch);
viewAvailableRooms.addEventListener('click', bookARoom);
homeButton.addEventListener('click', goHomeManagerView);
viewCustomerBookingsButton.addEventListener('click', viewCustomerBookings);

searchCustomerNameDropDown.addEventListener('change', (event) => {
  viewCustomerBookingsButton.classList.remove('hidden');
  searchCustomersForBookingButton.classList.remove('hidden');
  searchCustomersForBookingButton.disabled = false;
  viewCustomerBookingsButton.disabled = false;
  console.log(searchCustomerNameDropDown.value);
})
managerBookRoomDate.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  let calendarDate = formatDate.join('/');
  console.log('book a room date', calendarDate)
  updateBookingData()
  displayAvailableRooms(calendarDate);
});

function fetchAllData() {
  if (managerView.classList.contains('hidden')) {
    signOutButton.disabled = true;
  }
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

function updateBookingData() {
  let bookingPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(err => console.log(err))
  Promise.all([bookingPromise])
    .then(data => hotelService.rawBookingData = data[0])
    .then(() => hotelService.addBookings())
    .catch(err => console.log(err))
  console.log(hotelService.allBookings.length)
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

function goHomeManagerView() {
  updateBookingData();
  gridColumn.innerHTML = '';
  displayHotelOverview();
  homeButton.disabled = true;
  customerDirectoryButton.disabled = false;
  todayHotelOverview.classList.remove('hidden');
  todayHotelBookings.classList.remove('hidden');
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
  homeButton.disabled = false;
  customerDirectoryButton.disabled = true;
  viewCustomerBookingsButton.classList.add('hidden');
  searchCustomersForBookingButton.classList.add('hidden');
  todayHotelOverview.classList.add('hidden');
  todayHotelBookings.classList.add('hidden');
  customerBookingSearchBar.classList.remove('hidden');
}

function displayRoomSearch() {
  viewCustomerBookingsButton.disabled = false;
  manageCustomerBookings.classList.add('hidden');
  let customerNameInput = document.querySelector('.search-customer-name');
  userID = hotelService.findUserId(customerNameInput.value);
  viewAvailableRooms.classList.remove('hidden');
  managerBookRoomHeader.innerText = `Book a Room for ${customerNameInput.value} on`;
  searchCustomersForBookingButton.disabled = true;
}

function displayAvailableRooms(date) {
  updateBookingData();
  viewAvailableRooms.classList.remove('hidden');
  manageCustomerBookings.classList.remove('hidden');
  let gridColumn = document.getElementById('grid-column');
  gridColumn.innerHTML = '';
  console.log('display avail rooms date', date)
  let availableRooms = hotelService.findAvailableRooms(date);
  console.log('available rooms', availableRooms)
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
    let bookingPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(err => console.log(err))
    Promise.all([bookingPromise])
      .then(data => hotelService.rawBookingData = data[0])
      .then(() => hotelService.addBookings())
      .catch(err => console.log(err))
    let bookedButton = document.getElementById(`button-${roomNumber}`)
    bookedButton.innerText = 'BOOKED!';
    bookedButton.disabled = true;
  }
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBooking)
  })
    .then(response => response.json())
    .then(() => {
      onSuccess();
    })
    .catch(err => console.log(err))
}

function viewCustomerBookings() {
  viewCustomerBookingsButton.disabled = true;
  searchCustomersForBookingButton.disabled = false;
  manageCustomerBookings.classList.remove('hidden');
  viewAvailableRooms.classList.add('hidden');
  let username = searchCustomerNameDropDown.value;
  let userID = hotelService.findUserId(username);
  let bookings = hotelService.findCustomerBookings(userID);
  let sortedBookings = hotelService.sortBookingsByDate(bookings);
  let customerBookingsHeader = document.querySelector('.customer-bookings-header');
  customerBookingsHeader.innerText = `Bookings for ${username}`;
  if (sortedBookings.length > 0) {
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `
      <div class="grid-row" id="${booking.id}">
        <div class="grid-item">${booking.date}</div>
        <div class="grid-item">${booking.id}</div>
        <div class="grid-item">${booking.roomType.toUpperCase()}</div>
        <div class="grid-item">${booking.bedSize.toUpperCase()}</div>
        <div class="grid-item">${booking.bidet.toString().toUpperCase()}</div>
        <div class="grid-item">$${booking.costPerNight.toFixed(2)}</div>
        <div class="grid-item">DELETE BOOKING</div>
      </div>`
    }).join(' ')
    currentCustomerBookings.insertAdjacentHTML('beforeend', todaysBookingInfo);
    // formatCustomerInfo();
  } else {
    // searchTitle.innerText = `Bookings for ${searchCustomerInput.value}`;
    // viewBookingInfo.innerHTML = `<p class="customer-error-message"><b>We have no information for the customer ${searchCustomerInput.value}. Please enter another name and try again.</b></p>`;
  }
}
