var mongoose = require('mongoose');
var TestModel = mongoose.model('Test');
var Place = mongoose.model('Place');
var User = mongoose.model('User');
var Chat = mongoose.model('Chat');

module.exports.test = async function(req, res){
  var chatUsers = req.app.get('socketUsers');
  console.log(chatUsers);
  res.json(chatUsers);
}
//
// console.log(chatUsers);
// var dummy = require('mongoose-dummy');
// const ignoredFields = ['_id', 'created_at', '__v'];
// var randomObject = dummy(Chat, {
//     ignore: ignoredFields,
//     returnDate: true
// })
// res.json(await Chat.create(randomObject));





// var idOne = mongoose.Types.ObjectId('5b1bdf95b7d6b82cf6779e5c');
// var idTwo = mongoose.Types.ObjectId('5b1bdfbcb7d6b82cf6779e7f');
// try {
//   var chat  = await Chat.getChatBetweenTwoUsers(idOne,idTwo);
//   console.log(chat);
//   res.json(chat);
// } catch (e) {
//   res.send(e);
// }
