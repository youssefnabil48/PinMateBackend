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
  socket.on('chat', function(data){
      console.log(data);
  });
}
