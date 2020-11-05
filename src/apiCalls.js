let apiCalls = {
  fetchUserData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(err => console.log(err))
  },

  fetchRoomData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(err => console.log(err))
  },

  fetchBookingData() {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(err => console.log(err))
  }
}

export default apiCalls;