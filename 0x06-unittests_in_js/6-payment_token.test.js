const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return if true is passed in', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      chai.expect(res).to.include({ data: 'Successful response from the API' });
      done();
    }).catch((err) => done(err));
  });
});
