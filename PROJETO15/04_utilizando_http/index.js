const { response } = require('express');
const {createServer, request} = require('http');

let server = createServer((request, response) => {

    response.writeHead(200, {"Content-type": "text/html"});
    response.write(`
    <h1>Hello World!<h1>
    <p>primeira página com Node.js</p1>
    `);
    response.end();
});

server.listen(8000);

console.log("ouvindo a porta 8000");