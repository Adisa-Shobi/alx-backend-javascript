const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('tests the functionality of calculateNumber:', () => {
  describe('test using two integers:', () => {
    it('should equal 5', () => {
      assert.strictEqual(calculateNumber(3, 2), 5);
    });
  });

  describe('test using two float values:', () => {
    it('should equal 5', () => {
      assert.strictEqual(calculateNumber(2.2, 3.4), 5);
    });
  });

  describe('test using one float value and one integer:', () => {
    it('should equal 4', () => {
      assert.strictEqual(calculateNumber(1.8, 2), 4);
    });
  });

  describe('test using one float value and one integer rev positions:',
    () => {
      it('should equal 4', () => {
        assert.strictEqual(calculateNumber(2, 1.8), 4);
      });
    });

  describe('test using one float value rounded down and one integer:',
    () => {
      it('should equal 3', () => {
        assert.strictEqual(calculateNumber(2, 1.2), 3);
      });
    });

  describe('test using one float value a rounded down and one integer:',
    () => {
      it('should equal 4', () => {
        assert.strictEqual(calculateNumber(1.3, 3), 4);
      });
    });
});
