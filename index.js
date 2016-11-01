var express = require('express');
var app = express();

var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/app/.index.html'));
	console.log('requ');
});


//Handle socket connections from client
io.on('connection', function(client){
	console.log("client connected");

	client.emit('msg','Welcome');

	client.on('client-msg', function(data){
		console.log(data);
	});
});

server.listen(8080);