const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let connectedUsers = 0;

io.on('connection', (socket) => {
  connectedUsers++;
  io.emit('userCount', connectedUsers);

  socket.on('disconnect', () => {
    connectedUsers--;
    io.emit('userCount', connectedUsers);
  });
});


http.listen(3000, () => {
  console.log('Server listening on port 3000');
});