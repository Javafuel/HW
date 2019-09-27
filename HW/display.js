var http = require('http');
var first = require('./star');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(first.asterisk());
}).listen(8080); 