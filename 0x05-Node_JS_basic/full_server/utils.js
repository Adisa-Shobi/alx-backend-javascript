const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (data === undefined || err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let lines = data.toString().split(/\r\n|\n/);
      lines = lines.filter((item) => item !== '');
      lines = lines.map((item) => item.split(','));
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
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
