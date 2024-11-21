// Step 04 : Password generator
const genPass = require('generate-password');

const password = genPass.generate({
    length: 10,
    numbers: true,
});

console.log(password);