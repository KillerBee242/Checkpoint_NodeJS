// Step 02 : HTTP Server
const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on http://localhost:3000');
});