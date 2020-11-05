import chai from 'chai';
const expect = chai.expect;

import Room from '../src/Room.js'

describe('Room', () => {
  let room;
  beforeEach(() => {
    room = new Room({
      number: 1,
      roomType: 'residential suite',
      bidet: true,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 358.4
    });
  })

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Room).to.be.a('function');
    });

    it('should be an instance of Room', () => {
      expect(room).to.be.an.instanceof(Room);
    });

    it('should have a room number', () => {
      expect(room.number).to.equal(1);
    });

    it('should have a room type', () => {
      expect(room.roomType).to.equal('residential suite');
    });

    it('should have a bidet', () => {
      expect(room.bidet).to.equal(true);
    });

    it('should have a bedSize', () => {
      expect(room.bedSize).to.equal('queen');
    });

    it('should have a number of beds', () => {
      expect(room.numBeds).to.equal(1);
    });

    it('should have a cost per night', () => {
      expect(room.costPerNight).to.equal(358.4);
    });
  })

});
