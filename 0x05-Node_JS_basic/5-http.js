const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (reqUrl === '/students') {
    const database = process.argv[2];
    let data;
    try {
      data = await countStudents(database);
    } catch (err) {
      res.end(err.message);
    }
    res.write('This is the list of our students\n');
    res.write(data.join('\n'));
    res.end();
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
