const chai = require('chai');
const request = require('request');

describe('testing simple Express application', () => {
  it('should GET "Welcome to the payment system"', () => new Promise((done) => {
    const url = 'http://localhost:7865';

    request(url, (error, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});

describe('test for the /cart/:id GET route', () => {
  describe('id as a number', () => {
    it('should return 200 OK', () => new Promise((done) => {
	    const url = 'http://localhost:7865/cart/2345';

	    request(url, (err, resp, body) => {
        chai.expect(resp.statusCode).to.equal(200);
        done();
	    });
    }));
  });

  describe('id as a non number', () => {
    it('should return 404 Not Found', () => new Promise((done) => {
	    const url = 'http://localhost:7865/cart/2345.64';

	    request(url, (err, resp, body) => {
        chai.expect(resp.statusCode).to.equal(404);
        done();
	    });
    }));
  });
});

describe('test for /login and /available_payments', () => {
  describe('test login route', () => {
    it('should be 200', () => new Promise((done) => {
	    request.post('http://localhost:7865/login',
			 { json: { userName: 'Shobi' } },
			 (err, resp, body) => {
          chai.expect(resp.statusCode).is.equal(200);
          chai.expect(resp.body).is.equal('Welcome Shobi');
          done();
	    });
    }));
  });

  describe('test /available_payments route', () => {
    it('should be 200', () => new Promise((done) => {
	    request('http://localhost:7865/available_payments',
			 (err, resp, body) => {
          chai.expect(resp.statusCode).is.equal(200);
          chai.expect(resp.body).is.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
          done();
	    });
    }));
  });
});
