/*
    A function that dispatch all the coming socket messages and redirecting to the right controller
    Takes: args :{
      socket : an instance of the socket connection
    }
    Returns: null
*/
module.exports.handle = function(socket){
  console.log('socket connection made', socket.id);
  // Handle chat event
  socket.on('sendMessage', function(data){
      console.log(data);
      console.log(io.clients);
  });
}
//
// const client = require('socket.io').listen(4000).sockets;
// console.log('socket server running on post 4000');
// client.on('connection', function(socket){
//   console.log(socket);
// });
