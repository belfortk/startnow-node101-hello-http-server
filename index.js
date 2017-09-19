// write your code here

//requires HTTP way

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
  var timestamp = new Date();
  console.log("Request to /test received at " + timestamp.toString())

}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
*/


//Requires Express way
/** 
var express = require('express');
var app = express();
 
app.get('/', function(request, response){
    response.send("Hello World")
    var timestamp = new Date();
    console.log("Received GET request for: / at" + timestamp.toString())
});

app.get('/test', function(request, response){
    response.send("the test worked")
    var timestamp = new Date();
    console.log("Received GET request for: /test at " + timestamp.toString())
});

var server = app.listen(8080, function(){
    console.log("listening on port 8080");
})

**/