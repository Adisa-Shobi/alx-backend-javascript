export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
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

  toString() {
    return `[object ${this._code}]`;
  }
}
