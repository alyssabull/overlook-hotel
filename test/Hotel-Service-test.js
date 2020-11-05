import chai from 'chai';
const expect = chai.expect;

import HotelService from '../src/Hotel-Service.js';
import User from '../src/User.js';
import Room from '../src/Room.js';
import Booking from '../src/Booking.js';

describe('Hotel Service', () => {
  let sampleUserData;
  let sampleRoomData;
  let sampleBookingData;
  let hotelService;
  beforeEach(() => {
    sampleUserData = [
      {
        id: 1,
        name: 'Ellis Joyner'
      },{
        id: 2,
        name: 'Alyssa Bull'
      },{
        id: 3,
        name: 'Kara Caputo'
      }
    ];
    sampleRoomData = [
      {
        number: 1,
        roomType: 'residential suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 358.4
      },{
        number: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 254.99
      },{
        number: 3,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 186.7
      }
    ];
    sampleBookingData = [
      {
        id: '5fwrgu4i7k55hl6sz',
        userID: 1,
        date: '2021/04/22',
        roomNumber: 1,
        roomServiceCharges: []
      },{
        id: '4hwrgu7i7k12hl6dz',
        userID: 1,
        date: '2020/10/10',
        roomNumber: 2,
        roomServiceCharges: []
      },{
        id: 'qewrgu7i7345hl6dz',
        userID: 3,
        date: '2020/10/10',
        roomNumber: 3,
        roomServiceCharges: []
      },{
        id: 'q67dhkjf7345hl6dz',
        userID: 2,
        date: '2020/10/10',
        roomNumber: 1,
        roomServiceCharges: []
      }
    ];
    hotelService = new HotelService(sampleUserData, sampleRoomData, sampleBookingData);
  })

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(HotelService).to.be.a('function');
    });

    it('should be an instance of Hotel Service', () => {
      expect(hotelService).to.be.an.instanceof(HotelService);
    });

    it('should start have a first argument of userData', () => {
      expect(hotelService.rawUserData).to.equal(sampleUserData);
    });

    it('should start have a second argument of roomData', () => {
      expect(hotelService.rawRoomData).to.equal(sampleRoomData);
    });

    it('should start have a third argument of bookingData', () => {
      expect(hotelService.rawBookingData).to.equal(sampleBookingData);
    });

    it('should start with no users', () => {
      expect(hotelService.allUsers).to.deep.equal([]);
    });

    it('should start with no rooms', () => {
      expect(hotelService.allRooms).to.deep.equal([]);
    });

    it('should start with no bookings', () => {
      expect(hotelService.allBookings).to.deep.equal([]);
    });
  })

  describe('Methods', () => {
    it('should create an array of users', () => {
      hotelService.addUsers();
      const user1 = new User(sampleUserData[0]);
      const user2 = new User(sampleUserData[1]);
      const user3 = new User(sampleUserData[2]);

      expect(hotelService.allUsers).to.deep.equal([user1, user2, user3]);
    });

    it('should create an array of rooms', () => {
      hotelService.addRooms();
      const room1 = new Room(sampleRoomData[0]);
      const room2 = new Room(sampleRoomData[1]);
      const room3 = new Room(sampleRoomData[2]);

      expect(hotelService.allRooms).to.deep.equal([room1, room2, room3]);
    });

    it('should create an array of bookings', () => {
      hotelService.addBookings();
      const booking1 = new Booking(sampleBookingData[0]);
      const booking2 = new Booking(sampleBookingData[1]);
      const booking3 = new Booking(sampleBookingData[2]);
      const booking4 = new Booking(sampleBookingData[3]);

      expect(hotelService.allBookings).to.deep.equal([booking1, booking2, booking3, booking4]);
    });

    it('should be able to find the name of the current user', () => {
      hotelService.addUsers();
      const username = 'customer1';

      expect(hotelService.findUserName(username)).to.deep.equal('Ellis Joyner');
    });

    it('should be able to find room details', () => {
      const room = new Room(sampleRoomData[0])
      hotelService.addRooms();

      expect(hotelService.findRoomDetails(1)).to.deep.equal(room)
    });

    it('should be able to filter room by type', () => {
      hotelService.addRooms();

      expect(hotelService.filterRoomByType(sampleRoomData,'residential suite')).to.deep.equal([sampleRoomData[0]])
    });

    it('should be able to find the number of available rooms by day', () => {
      hotelService.addRooms();
      hotelService.addBookings();

      expect(hotelService.calculateNumberAvailableRooms('2021/04/22')).to.deep.equal(2)
    });

    it('should return 0 if no rooms are available', () => {
      hotelService.addRooms();
      hotelService.addBookings();

      expect(hotelService.calculateNumberAvailableRooms('2020/10/10')).to.deep.equal(0)
    });

    it('should be able to find available rooms by day', () => {
      hotelService.addRooms();
      hotelService.addBookings();

      expect(hotelService.findAvailableRooms('2021/04/22')).to.deep.equal([sampleRoomData[1], sampleRoomData[2]])
    });

    it('should receive an apology message if no rooms are available', () => {
      hotelService.addRooms();
      hotelService.addBookings();

      expect(hotelService.findAvailableRooms('2020/10/10')).to.deep.equal('Sorry, there are no available rooms for the selected date. We sincerely apologize. Please select a different date and try again.')
    });

    it('should be able to calculate percentage occupied by day', () => {
      hotelService.addRooms();
      hotelService.addBookings();

      expect(hotelService.calculatePercentageOccupied('2021/04/22')).to.deep.equal('33.3')
    });

    it('should be able to calculate the total revenue by day', () => {
      hotelService.addRooms();
      hotelService.addBookings();

      expect(hotelService.calculateTotalRevenue('2020/10/10')).to.deep.equal('800.09')
    });

    it('should be able to calculate the total spent by the current user', () => {
      const user = new User(sampleUserData[0]);
      hotelService.addBookings();
      hotelService.addRooms();

      expect(hotelService.calculateTotalSpent(user)).to.deep.equal(613.39)
    });

    it ('should be able to find the current date', () => {
      expect(hotelService.getTodayDate()).to.deep.equal('2020/11/04')
    });

    it('should be able to add a booking for the current user', () => {
      const user = new User(sampleUserData[0]);
      const booking1 = new Booking('hf729dj19385hj', 1, '2020/11/25', 2, []);
      hotelService.addBookings();
      hotelService.addBooking(user, booking1);

      expect(hotelService.allBookings.length).to.equal(5);
    });

    it('should be able to delete a booking for the current user', () => {
      const booking1 = sampleBookingData[0];
      hotelService.addBookings();
      hotelService.deleteBooking(booking1);

      expect(hotelService.allBookings.length).to.equal(3);
    });

    it('should not be able to delete a booking from the past', () => {
      const booking1 = sampleBookingData[1];
      hotelService.addBookings();

      expect(hotelService.allBookings.length).to.equal(4);
      expect(hotelService.deleteBooking(booking1)).to.equal('Oops! You cannot delete a booking from the past. Select another booking and try again.');
    });
  })

});
