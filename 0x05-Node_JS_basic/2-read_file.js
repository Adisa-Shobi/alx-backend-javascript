const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  let lines = data.toString().split(/\r\n|\n/);
  lines = lines.filter((item) => item !== '');
  lines = lines.map((item) => item.split(','));
  const numberOfStudents = lines.length ? lines.length - 1 : 0;
  console.log(`Number of students: ${numberOfStudents}`);
  const fields = {};
  for (let i = 1; i < lines.length; i += 1) {
    const line = lines[i];
    const field = line[line.length - 1];
    if (field in fields) { fields[field].push(line[0]); } else { fields[field] = [line[0]]; }
  }
  for (const [key, value] of Object.entries(fields)) {
    console.log(`Number of students in ${key}: ${value.length}.\
 List: ${value.join(', ')}`);
  }
}

module.exports = countStudents;
