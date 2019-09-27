var http = require('http');
var first = require('./star.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(first());
}).listen(8080); 