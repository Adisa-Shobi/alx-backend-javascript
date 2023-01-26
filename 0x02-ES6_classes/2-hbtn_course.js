export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(x) {
    if (typeof x === 'string') this._name = x;
    else throw TypeError('Name must be a string');
  }

  get name() {
    return this._name;
  }

  set length(x) {
    if (typeof x === 'number') this._length = x;
    else throw TypeError('Length must be a number');
  }

  get length() {
    return this._length;
  }

  set students(x) {
    if (typeof x === 'object') this._students = x;
    else throw TypeError('Students must be an array');
  }

  get students() {
    return this._students;
  }
}
