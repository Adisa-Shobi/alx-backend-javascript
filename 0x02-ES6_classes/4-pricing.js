import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set currency(x) {
    console.log(typeof x);
    if (x instanceof Currency) {
      this._currency = x;
    } else {
      throw TypeError('amount must be number');
    }
  }

  get currency() {
    return this._currency;
  }

  set amount(x) {
    if (typeof x === 'number') {
      this._amount = x;
    } else {
      throw TypeError('amount must be a number');
    }
  }

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw TypeError('amount and conversionRate must be numbers');
  }
}
