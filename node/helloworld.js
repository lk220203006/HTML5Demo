console.log("Hello World")

var http = require("http");
http.createServer(function (request,response) {
    response.writeHead(200,{'Context-Type':'text/plain'});
    response.end('hello world\n');
}).listen(8888);
console.log('server running at http://127.0.0.1:8888/');