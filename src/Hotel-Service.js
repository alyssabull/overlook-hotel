import User from './User.js';
import Room from './Room.js';
import Booking from './Booking.js';

export default class HotelService {
  constructor(userData, roomData, bookingData) {
    this.rawUserData = userData;
    this.rawRoomData = roomData;
    this.rawBookingData = bookingData;
    this.allUsers = [];
    this.allRooms = [];
    this.allBookings = [];
  }

  start() {
    this.addUsers();
    this.addRooms();
    this.addBookings();
  }

  addUsers() {
    return this.rawUserData.map(data => {
      let user = new User(data);
      this.allUsers.push(user);
    })
  }

  addRooms() {
    return this.rawRoomData.map(data => {
      let room = new Room(data);
      this.allRooms.push(room);
    })
  }

  addBookings() {
    this.allBookings = [];
    return this.rawBookingData.map(data => {
      let booking = new Booking(data);
      this.allBookings.push(booking);
    })
  }

  findUserName(username) {
    let findUserID = username.split(/(\d+)/);
    let userID = parseInt(findUserID[1]);
    let findName = this.allUsers.find(user => {
      return user.id === userID;
    })
    return findName.name;
  }

  findNameFromID(id) {
    let findName = this.allUsers.find(user => {
      return user.id === id;
    })
    return findName.name;
  }

  findUserId(name) {
    let findName = this.allUsers.find(user => {
      return user.name === name;
    })
    if (findName) {
      return findName.id;
    } else {
      return 'We have no record of the user searched. Please search for another user.'
    }
  }

  findRoomDetails(roomNumber) {
    return this.allRooms.find(room => {
      return room.number === roomNumber;
    })
  }

  filterRoomByType(rooms, roomType) {
    return rooms.filter(room => {
      return room.roomType === roomType;
    })
  }

  calculateNumberAvailableRooms(date) {
    let percent = this.calculatePercentageOccupied(date) / 100;
    let occupiedRooms = percent * 25;
    return 25 - occupiedRooms;
  }

  findAvailableRooms(date) {
    let roomsBooked = this.allBookings.reduce((roomNums, booking) => {
      if (booking.date === date && typeof booking.roomNumber === 'number') {
        roomNums.push(booking.roomNumber)
      }
      return roomNums;
    }, [])

    let rooms = [...this.allRooms];

    rooms.forEach(roomNum => {
      if (roomNum > 25 || roomNum < 1) {
        let index = rooms.indexOf(roomNum);
        rooms.splice(index, 1);
      }
    })

    if (roomsBooked.length < rooms.length) {
      roomsBooked.forEach(roomNum => {
        rooms.forEach(room => {
          if (roomNum === room.number) {
            let index = rooms.indexOf(room);
            rooms.splice(index, 1);
          }
        })
      })
      return rooms;
    } else {
      return 'Sorry, there are no available rooms for the selected date. We sincerely apologize. Please select a different date and try again.'
    }
  }

  findCustomerBookings(id) {
    return this.allBookings.reduce((allUserBookings, booking) => {
      if (booking.userID == id && booking.roomNumber > 1) {
        this.allRooms.forEach(room => {
          if (room.number === booking.roomNumber) {
            booking.roomType = room.roomType;
            booking.costPerNight = room.costPerNight;
            booking.bidet = room.bidet;
            booking.bedSize = room.bedSize;
            booking.numBeds = room.numBeds;
          }
        })
        this.allUsers.forEach(user => {
          if (user.id === booking.userID) {
            booking.guestName = user.name;
          }
        })
        allUserBookings.push(booking);
      }
      return allUserBookings;
    }, [])
  }

  findBookings(date) {
    let todayBookings = this.allBookings.reduce((todayBookings, booking) => {
      if (booking.roomNumber > 0 && booking.date === date) {
        this.allRooms.forEach(room => {
          if (room.number == booking.roomNumber) {
            booking.roomType = room.roomType;
            booking.costPerNight = room.costPerNight;
            booking.bedSize = room.bedSize;
            booking.bidet = room.bidet;
          }
        })
        this.allUsers.forEach(user => {
          if (user.id === booking.userID) {
            booking.guestName = user.name;
          }
        })
        todayBookings.push(booking);
      }
      return todayBookings;
    }, [])

    if (todayBookings.length > 0) {
      return todayBookings;
    } else {
      return 'No bookings for the selected date.'
    }
  }

  calculatePercentageOccupied(date) {
    let dateBookings = this.allBookings.filter(booking => {
      return booking.date === date;
    })

    let percent = (dateBookings.length / this.allRooms.length) * 100;

    return percent.toFixed(0);
  }

  calculateTotalRevenue(date) {
    let dateBookings = this.allBookings.reduce((dateBookings, booking) => {
      if (booking.date === date) {
        dateBookings.push(booking.roomNumber);
      }
      return dateBookings;
    }, [])

    return this.allRooms.reduce((totalRevenue, room) => {
      dateBookings.forEach(roomNum => {
        if (roomNum === room.number) {
          totalRevenue += room.costPerNight;
        }
      })
      return totalRevenue;
    }, 0).toFixed(2)
  }

  calculateNumberOfStays(id) {
    let userRoomNumbers = [];
    this.allBookings.forEach(booking => {
      if (booking.userID == id) {
        userRoomNumbers.push(booking.roomNumber);
      }
    })
    return userRoomNumbers.length;
  }

  calculateTotalSpent(id) {
    let userRoomNumbers = [];
    this.allBookings.forEach(booking => {
      if (booking.userID == id) {
        userRoomNumbers.push(booking.roomNumber);
      }
    })
    return this.allRooms.reduce((totalSpent, room) => {
      userRoomNumbers.forEach(roomNum => {
        if (roomNum === room.number) {
          totalSpent += room.costPerNight;
        }
      })
      return totalSpent;
    }, 0)
  }

  sortBookingsByDate(bookings) {
    if (bookings.length > 0) {
      return bookings.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    } else {
      return 'Sorry, no rooms available for the selected dates.'
    }
  }

  sortBookingsByRoomNumber(bookings) {
    return bookings.sort((a, b) => {
      return a.roomNumber - b.roomNumber;
    })
  }

  getTodayDate() {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return today = yyyy + '/' + mm + '/' + dd;
  }

  getDashedTodayDate() {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return today = yyyy + '-' + mm + '-' + dd;
  }

  addNewBooking(userID, date, roomNumber) {
    let bookingInfo = this.allRooms.reduce((bookingDetails, room) => {
      if (room.number == roomNumber) {
        bookingDetails.userID = parseInt(userID);
        bookingDetails.date = date;
        bookingDetails.roomNumber = room.number;
      }
      return bookingDetails;
    }, {})
    return bookingInfo;
  }

  deleteBooking(deleteBooking) {
    let todayDate = this.getTodayDate();
    if (deleteBooking.date > todayDate) {
      this.allBookings.forEach(booking => {
        if (booking.id === deleteBooking.id) {
          let index = this.allBookings.indexOf(booking);
          this.allBookings.splice(index, 1);
        }
      })
    } else {
      return 'Oops! You cannot delete a booking from the past. Select another booking and try again.'
    }
  }
}
