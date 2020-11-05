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
    if (typeof this.findAvailableRooms(date) === 'string') {
      return 0;
    } else {
      return this.findAvailableRooms(date).length
    }
  }

  findAvailableRooms(date) {
    let roomsBooked = this.allBookings.reduce((roomNums, booking) => {
      if (booking.date === date) {
        roomNums.push(booking.roomNumber)
      }
      return roomNums;
    }, [])

    let rooms = [...this.allRooms];
    if (roomsBooked.length < rooms.length) {
      rooms.forEach(room => {
        roomsBooked.forEach(roomNum => {
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
      if (booking.userID === id) {
        this.allRooms.forEach(room => {
          if (room.number === booking.roomNumber) {
            booking.roomType = room.roomType;
            booking.costPerNight = room.costPerNight;
          }
        })
        this.allUsers.forEach(user => {
          if (user.id === booking.userID) {
            booking.guestName = user.name;
          }
        })
        allUserBookings.push(booking);
        console.log(allUserBookings)
      }
      return allUserBookings;
    }, [])
  }

  findBookings(date) {
    let todayBookings = this.allBookings.reduce((todayBookings, booking) => {
      if (booking.date === date) {
        this.allRooms.forEach(room => {
          if (room.number === booking.roomNumber) {
            booking.roomType = room.roomType;
            booking.costPerNight = room.costPerNight;
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

    let percent = (dateBookings.length / this.allRooms.length)*100;

    return percent.toFixed(1);
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

  calculateTotalSpent(id) {
    let userRoomNumbers = [];
    this.allBookings.forEach(booking => {
      if (booking.userID === id) {
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

  getTodayDate() {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd < 10) {
      dd ='0'+ dd;
    }
    if(mm < 10){
      mm ='0'+ mm;
    }
    return today = yyyy+'/'+mm+'/'+dd;
  }

  addBooking(newBooking) {
    this.allBookings.push(newBooking);
  }

  deleteBooking(deleteBooking) {
    let todayDate = this.getTodayDate();
    if (deleteBooking.date > todayDate) {
      this.allBookings.forEach(booking => {
        if (booking.id === deleteBooking.id) {
          let index = this.allBookings.indexOf(booking);
          this.allBookings.splice(index,1);
        }
      })
    } else {
      return 'Oops! You cannot delete a booking from the past. Select another booking and try again.'
    }
  }
}
