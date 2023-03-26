const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('tests for the upgraded calculateNumber function', () => {
  describe('test for SUM operation', () => {
    it('should equal 5', () => {
      assert.equal(calculateNumber('SUM', 2, 3), 5);
    });
  });

  describe('test for SUM operation with two floats', () => {
    it('should equal 6', () => {
      assert.equal(calculateNumber('SUM', 2.6, 3.2), 6);
    });
  });

  describe('test for SUM operation with first val floats', () => {
    it('should equal 6', () => {
      assert.equal(calculateNumber('SUM', 2.6, 3), 6);
    });
  });

  describe('test for SUM operation with second val floats', () => {
    it('should equal 5', () => {
      assert.equal(calculateNumber('SUM', 2, 3.2), 5);
    });
  });

  describe('test for SUBTRACT operation', () => {
    it('should equal 5', () => {
      assert.equal(calculateNumber('SUBTRACT', 8, 3), 5);
    });
  });

  describe('test for SUBTRACT operation with two floats one bordeline',
    () => {
      it('should equal 0', () => {
        assert.equal(calculateNumber('SUBTRACT', 2.5, 3.2), 0);
      });
    });

  describe('test for SUBTRACT operation first val float', () => {
    it('should equal 5', () => {
      assert.equal(calculateNumber('SUBTRACT', 8.3, 3), 5);
    });
  });

  describe('test for SUBTRACT operation second val float', () => {
    it('should equal 4', () => {
      assert.equal(calculateNumber('SUBTRACT', 8, 3.5), 4);
    });
  });

  describe('test for SUBTRACT operation with -ve result', () => {
    it('should equal 4', () => {
      assert.equal(calculateNumber('SUBTRACT', 2, 3.5), -2);
    });
  });

  describe('test for DIVIDE operation with seccond value as 0', () => {
    it('should equal Error', () => {
      assert.equal(calculateNumber('DIVIDE', 8, 0), 'Error');
    });
  });

  describe('test for DIVIDE operation', () => {
    it('should equal 5', () => {
      assert.equal(calculateNumber('DIVIDE', 10, 2), 5);
    });
  });

  describe('test for DIVIDE operation with two floats', () => {
    it('should equal 4', () => {
      assert.equal(calculateNumber('DIVIDE', 12.3, 2.5), 4);
    });
  });
});
