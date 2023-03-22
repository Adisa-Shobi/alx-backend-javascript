const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res, db) {
    const pre = 'This is the list of our students\n';
    let fields;
    try {
      fields = await readDatabase(db);
    } catch (err) {
      res.status(500);
      res.send(err.message);
      res.end();
    }
    const resp = [];
    let msg;
    for (const [key, value] of Object.entries(fields)) {
      msg = `Number of students in ${key}: ${value.length}.\
 List: ${value.join(', ')}`;
      resp.push(msg);
    }
    console.log(fields);
    res.send(`${pre}${resp.join('\n')}`);
  }

  static async getAllStudentsByMajor(req, res, db) {
    const { major } = req.params;
    if (major !== 'SWE' && major !== 'CS') {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
    } else {
      let fields;
      try {
        fields = await readDatabase(db);
      } catch (err) {
        res.status(500);
        res.send(err.message);
        res.end();
      }
      const names = fields[major];
      res.send(`List: ${names.join(', ')}`);
    }
  }
}

module.exports = StudentsController;
