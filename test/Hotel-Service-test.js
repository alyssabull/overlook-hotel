import chai from 'chai';
const expect = chai.expect;

import HotelService from '../src/Hotel-Service.js';
import Booking from '../src/Booking.js';
import Room from '../src/Room.js';
import User from '../src/User.js';

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
      }
    ];
    sampleBookingData = [
      {
        id: '5fwrgu4i7k55hl6sz',
        userID: 1,
        date: '2020/04/22',
        roomNumber: 1,
        roomServiceCharges: []
      },{
        id: '4hwrgu7i7k12hl6dz',
        userID: 1,
        date: '2020/10/10',
        roomNumber: 2,
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

});
