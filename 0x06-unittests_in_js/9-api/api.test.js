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

describe("Test for the /cart/:id GET route", function () {
    describe("id as a number", function () {
	it("Should return 200 OK", function(done) {
	    const url = "http://localhost:7865/cart/2345";

	    request(url, (err, resp, body) => {
		chai.expect(resp.statusCode).to.equal(200);
		done()
	    })
	})
    })

    describe("id as a non number", function () {
	it("Should return 404 Not Found", function(done) {
	    const url = "http://localhost:7865/cart/2345.64";

	    request(url, (err, resp, body) => {
		chai.expect(resp.statusCode).to.equal(404);
		done();
	    })
	})
    })
})
