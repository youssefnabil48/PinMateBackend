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
  var chats = Chat.find(function(err, chats) {
      if (err)
          res.status(500).json({ error: err });
      else {
          if (!chats) {
              res.json({ msg: "no object found" });
          } else {
              res.json({
                  msg: "success",
                  chats : chats
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
module.exports.get = function(req, res) {

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
    var t = new Chat({
        content: req.body.content,
        status: req.body.status,
        delivered: req.body.delivered,
        sender_id: req.body.sender_id,
        receiver_id: req.body.receiver_id
    });
    t.save(function(err) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ msg: "success" });
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
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.sendMessage = function(req, res) {

};
