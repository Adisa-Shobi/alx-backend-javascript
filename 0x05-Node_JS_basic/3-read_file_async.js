const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (data === undefined || err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const resp = [];
      let lines = data.toString().split(/\r\n|\n/);
      lines = lines.filter((item) => item !== '');
      lines = lines.map((item) => item.split(','));
      const numberOfStudents = lines.length ? lines.length - 1 : 0;
      let msg = `Number of students: ${numberOfStudents}`;
      console.log(msg);
      resp.push(msg);
      const fields = {};
      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i];
        const field = line[line.length - 1];
        if (field in fields) {
          fields[field].push(line[0]);
        } else {
          fields[field] = [line[0]];
        }
      }
      for (const [key, value] of Object.entries(fields)) {
        msg = `Number of students in ${key}: ${value.length}.\
 List: ${value.join(', ')}`;
        console.log(msg);
        resp.push(msg);
      }
      resolve(resp);
    });
  });
}

module.exports = countStudents;
