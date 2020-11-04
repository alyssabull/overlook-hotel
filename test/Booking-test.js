import chai from 'chai';
const expect = chai.expect;

import Booking from '../src/Booking.js'

describe('Booking', () => {
  let booking;
  beforeEach(() => {
    booking = new Booking({
      id: '5fwrgu4i7k55hl6sz',
      userID: 9,
      date: '2020/04/22',
      roomNumber: 15,
      roomServiceCharges: []
    });
  })

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Booking).to.be.a('function');
    });

    it('should be an instance of Booking', () => {
      expect(booking).to.be.an.instanceof(Booking);
    });

    it('should have a booking id', () => {
      expect(booking.id).to.equal('5fwrgu4i7k55hl6sz');
    });

    it('should have a user ID', () => {
      expect(booking.userID).to.equal(9);
    });

    it('should have a date', () => {
      expect(booking.date).to.equal('2020/04/22');
    });

    it('should have a room number', () => {
      expect(booking.roomNumber).to.equal(15);
    });

    it('should have room service charges', () => {
      expect(booking.roomServiceCharges).to.deep.equal([]);
    });
  })

});
