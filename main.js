const http = require('http');
const OS = require('os');
const path = require('path');

import { personalmodule } from './personalmodule';
const server = http.createServer((req, res) => {
    console.log('server request');
})

server.listen(5000, 'localhost', (error) =>  {
    error ? console.log(error) : console.log('listen port 5000');
})

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(OS.platform());
console.log(OS.arch());