const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');

describe('testing sendPaymentRequestToAPI with hooks', () => {
  let spyConsole;
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyConsole.restore();
  });

  it('testing log from sendPaymentRequestToAPI', () => {
    sendPaymentRequestToAPI(100, 20);
    chai.expect(spyConsole.calledOnceWithExactly('The total is: 120'));
  });

  it('testing log from sendPaymentRequestToAPI', () => {
    sendPaymentRequestToAPI(10, 10);
    chai.expect(spyConsole.calledOnceWithExactly('The total is: 20'));
  });
});
