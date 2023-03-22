const readDatabase = require('./utils.js');

async function main() {
    const fields = await readDatabase('../database.csv');
    console.log(fields);
}
main();
