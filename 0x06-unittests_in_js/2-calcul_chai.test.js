const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('tests for the upgraded calculateNumber function', () => {
  describe('test for SUM operation', () => {
    it('should equal 5', () => {
      chai.expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
  });

  describe('test for SUM operation with two floats', () => {
    it('should equal 6', () => {
      chai.expect(calculateNumber('SUM', 2.6, 3.2)).to.equal(6);
    });
  });

  describe('test for SUM operation with first val floats', () => {
    it('should equal 6', () => {
      chai.expect(calculateNumber('SUM', 2.6, 3)).to.equal(6);
    });
  });

  describe('test for SUM operation with second val floats', () => {
    it('should equal 5', () => {
      chai.expect(calculateNumber('SUM', 2, 3.2)).to.equal(5);
    });
  });

  describe('test for SUBTRACT operation', () => {
    it('should equal 5', () => {
      chai.expect(calculateNumber('SUBTRACT', 8, 3)).to.equal(5);
    });
  });

  describe('test for SUBTRACT operation with two floats one bordeline',
    () => {
      it('should equal 0', () => {
        chai.expect(calculateNumber('SUBTRACT', 2.5, 3.2)).to.equal(0);
      });
    });

  describe('test for SUBTRACT operation first val float', () => {
    it('should equal 5', () => {
      chai.expect(calculateNumber('SUBTRACT', 8.3, 3)).to.equal(5);
    });
  });

  describe('test for SUBTRACT operation second val float', () => {
    it('should equal 4', () => {
      chai.expect(calculateNumber('SUBTRACT', 8, 3.5)).to.equal(4);
    });
  });

  describe('test for SUBTRACT operation with -ve result', () => {
    it('should equal 4', () => {
      chai.expect(calculateNumber('SUBTRACT', 2, 3.5)).to.equal(-2);
    });
  });

  describe('test for DIVIDE operation with seccond value as 0', () => {
    it('should equal Error', () => {
      chai.expect(calculateNumber('DIVIDE', 8, 0)).to.equal('Error');
    });
  });

  describe('test for DIVIDE operation', () => {
    it('should equal 5', () => {
      chai.expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });
  });

  describe('test for DIVIDE operation with two floats', () => {
    it('should equal 4', () => {
      chai.expect(calculateNumber('DIVIDE', 12.3, 2.5)).to.equal(4);
    });
  });
});
