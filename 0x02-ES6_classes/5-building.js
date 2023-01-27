export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(x) {
    if (typeof x === 'number') {
      this._sqft = x;
    } else {
      throw TypeError('sqft must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
