// var http = require("http");
// http.createServer(function (request, response) {  
//    response.writeHead(200, {'Content-Type': 'text/plain'});  
//    response.end('Hello World\n');
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');

var express = require('express'), //引入express模块
    app = express(),
    server = require('http').createServer(app);
app.use('/', express.static(__dirname + '/review')); //指定静态HTML文件的位置
server.listen(8081);