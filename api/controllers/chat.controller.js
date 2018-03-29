var mongoose = require('mongoose');
var Chat = mongoose.model('Chat');


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getAll = function(req, res) {

};


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.get = function(req, res) {
  var chat = ChatModel({ _id: req.params.id });
  var foundChat = ChatModel.findOne(chat, function(err, foundChat) {
      if (err)
          res.status(500).json({ error: err });
      else {
          if (!foundChat) {
              res.json({ msg: "no object found" });
          } else {
              res.json({
                  msg: "success",
                  chats: foundChat
              });
          }
      }

  });
};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.create = function(req, res) {

};


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.update = function(req, res) {

};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.delete = function(req, res) {

};

/*
    Description
    Takes: args : {
      data : a data object that is sent through the socket connection
    }
    Returns: null
    Calling route: null
*/
module.exports.sendMessage = function(data) {

};
