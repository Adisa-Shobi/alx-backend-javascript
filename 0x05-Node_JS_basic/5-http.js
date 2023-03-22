const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

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
        resp.push(msg);
      }
      resolve(resp);
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const database = process.argv[2] ? process.argv[2] : '';
    let data;
    res.write('This is the list of our students\n');
    try {
      data = await countStudents(database);
    } catch (err) {
      res.end(err.message);
    }
    res.end(data.join('\n'));
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
