const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const database = process.argv[2];
    let data;
    try {
      data = await countStudents(database);
    } catch (err) {
      res.end(err.message);
    }
    res.write('This is the list of our students\n');
    res.end(data.join('\n'));
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
