var http = require('http');
var express = require('express');
var app = express();

// app.use(function (req,res,next) {
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     next()
//     // res.end('express.js')
// });

// app.get('/log',function(req,res,next){
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 error!\n");
// })
app.use(express.static('public'));
var router= require('./routers/index')(app)

http.createServer(app).listen(8888)
// http.createServer(function (req,res) {
//     res.writeHead(200,{
//         'Content-Type':'text/plain'
//     })
//     res.end('hello,world')
// }).listen(8888)
// console.log('node,server')
console.log(__dirname)
console.log(__filename)
