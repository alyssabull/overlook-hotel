import chai from 'chai';
const expect = chai.expect;

import User from '../src/User.js'

describe('User', () => {
  let user;
  beforeEach(() => {
    user = new User({
      id: 1,
      name: 'Ellis Joyner'
    });
  })

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should be an instance of User', () => {
      expect(user).to.be.an.instanceof(User);
    });

    it('should have an id', () => {
      expect(user.id).to.equal(1);
    });

    it('should have a name', () => {
      expect(user.name).to.equal('Ellis Joyner');
    });

    it('should start with no bookings', () => {
      expect(user.bookings).to.deep.equal([]);
    });
  })

});
