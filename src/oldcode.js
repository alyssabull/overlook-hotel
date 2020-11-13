

import {backToBooking, bookARoom, bookRoomButton, bookingModal, bookingsDate, bookRoomDate, bookRoomHeader, customerDirectoryButton, customerRooms, customerStatus, customerView, customerWelcome, enterCredentials, filterCategories, filterRefreshButton, filterSection, filterSubmitButton, gridContainer, hotelOverviewDate, managerView, modalContent, modalDate, modalTitle, overviewInfo, overviewTitle, searchCustomerButton, searchCustomerInput, searchTitle, todayBookings, todayOverview, viewBookingInfo}

let modal;
let todayDate;

backToBooking.addEventListener('click', backToCustomerBooking);
bookARoom.addEventListener('click', customerAddBookings)
customerStatus.addEventListener('click', displayCustomerBookings);
filterSection.addEventListener('click', refreshFilter);
filterSubmitButton.addEventListener('click', getFilterValue);
searchCustomerButton.addEventListener('click', displayBookARoom);



viewBookingInfo.addEventListener('click', deleteBooking);
window.addEventListener('click', openModal);
window.addEventListener('click', handleModal);

// bookingModal.addEventListener('change', (event) => {
//   let formatDate = `${event.target.value}`.split('-');
//   todayDate = formatDate.join('/');
//   displayManagerRooms(todayDate);
// });
bookRoomButton.addEventListener('click', bookCustomerRoom);
bookingsDate.addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  let date = formatDate.join('/');
  displayManagerViewRooms(date);
});
customerDirectoryButton.addEventLister('click', viewCustomerDirectory);



// function getRandomIndex() {
//   return Math.floor(Math.random() * 10);
// }

// FETCH DATA



// LOG IN



function loadUserPage() {
  hotelService.allUsers.forEach(user => {
    if (user.id == userID) {
      enterCredentials.classList.add('hidden');
      customerView.classList.remove('hidden');
      signOutButton.disabled = true;
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







// MANAGER VIEW

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







function bookCustomerRoom() {
  bookRoomButton.disabled = true;
  todayOverview.classList.remove('hidden');
  todayBookings.classList.add('hidden');
  customerSearchBar.classList.add('hidden');
  viewBookingInfo.classList.add('hidden');
}

function determineBookingDate(booking) {
  if (booking.date > hotelService.getTodayDate()) {
    return `<button type="button" class="delete-booking-button ${booking.id} ${typeof booking.id}">DELETE BOOKING</button>`
  } else {
    return '<button type="button" class="cannot-delete">-</button>';
  }
}

function displayBookARoom() {
  gridContainer.classList.remove('hidden');
}

function displayCustomerInfo() {

}

function formatCustomerInfo() {
  searchTitle.innerText = `Bookings for ${searchCustomerInput.value}`;
  searchTitle.insertAdjacentHTML('beforeend', `<p id="total-spent">Total Spent: $ ${hotelService.calculateTotalSpent(userID).toFixed(2)} <br><button class="add-booking-button">ADD BOOKING</button>`)
}

























function displayCustomerStats(status, totalSpent) {
  let statusInfo = `
  <p class="${status}"><b>${status} Level Preferred</b></p>
  <p>Total Spent: $${totalSpent}</p><button class="view-bookings-button customer-status">View Bookings</button>`;
  customerStatus.insertAdjacentHTML('afterbegin', statusInfo);
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
