// Step 03 : File system
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node !', (err) => {
if (err) throw err;
console.log('File created !');
});

fs.readFile('welcome.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});