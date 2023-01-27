export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(x) {
    if (typeof x === 'number') {
      this._size = x;
    } else {
      throw TypeError('size must be a number');
    }
  }

  get size() {
    return this._size;
  }

  set location(x) {
    if (typeof x === 'string') {
      this._location = x;
    } else {
      throw TypeError('location must be a number');
    }
  }

  get location() {
    return this._location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
