const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = process.argv[2] ? process.argv[2] : '';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const pre = 'This is the list of our students\n';
  let data;
  res.header('Content-Type', 'text/plain');
  try {
    data = await countStudents(database);
    res.send(`${pre}${data.join('\n')}`);
  } catch (err) {
    res.send(`${pre}${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Running on http://127.0.0.1:${port}`);
});

module.exports = app;
