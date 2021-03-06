var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.send(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var userConnected = JSON.stringify({user: "TenmBot", message: `a new user just joined`});
  var userDisconnected = JSON.stringify({user: "TenmBot", message: `a user just left`});

  io.emit('send:message', userConnected);

  socket.on('send:message', function(msg){
    socket.broadcast.emit('send:message', msg)
  });

  socket.on('disconnect', function(){
    io.emit('send:message', userDisconnected);
  });
});

http.listen(process.env.PORT || 8080, function(){
  console.log(process.env.PORT || 'listening on *8080');
});
