const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res, db) {
    const fields = readDatabase(db);
    const resp = [];
    let msg;
    for (const [key, value] of Object.entries(fields)) {
      msg = `Number of students in ${key}: ${value.length}.\
 List: ${value.join(', ')}`;
      resp.push(msg);
    }
    const pre = 'This is the list of our students\n';
    res.send(`${pre}${resp.join('\n')}`);
  }
}

module.exports = StudentsController;
