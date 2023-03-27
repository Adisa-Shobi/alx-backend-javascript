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
