export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(x) {
    if (typeof x === 'string') {
      this._code = x;
    } else {
      throw TypeError('code must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set name(x) {
    if (typeof x === 'string') {
      this._name = x;
    } else {
      throw TypeError('name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
