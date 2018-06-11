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
module.exports.getAll = async function(req, res) {
  try {
    var messages = await Chat.find();
    res.status(200).json({
      ok: true,
      data: messages,
      message: 'messages loaded successfully',
      error:null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
  }
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
module.exports.getMessagesBetweenTwoUsers = async function(req, res) {
  var idOne = mongoose.Types.ObjectId(req.body.firstId);
  var idTwo = mongoose.Types.ObjectId(req.body.secondId);
  try {
    var messages  = await Chat.getChatBetweenTwoUsers(idOne,idTwo);
    if(messages.lenght <= 0){
      res.status(200).json({
        ok: true,
        data: messages,
        message: 'no users found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: chats,
      message: 'messages loaded successfully',
      error:null
    });
  } catch (e) {
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
  }
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
module.exports.get = async function(req, res) {
  try {
    const rules = {
      id: 'required'
    };
    await validateAll(req.params, rules);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      ok: false,
      data: null,
      message: 'validation error bad request',
      error: e
    });
    return;
  }
  try {
    var message = await Chat.getChatById(req.params.id);
    res.status(200).json({
      ok: true,
      data: message,
      message: 'message loaded successfully',
      error:null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
  }
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
module.exports.delete = async function(req, res) {
  try {
    const rules = {
      id: 'required'
    };
    await validateAll(req.params, rules);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      ok: false,
      data: null,
      message: 'validation error bad request',
      error: e
    });
    return;
  }

  try {
    var isDeleted = await Chat.deleteUser(req.params.id);
    if(!isDeleted){
      res.status(200).json({
        ok: true,
        data: isDeleted,
        message: 'message is not deleted',
        error: null
      });
    }
    res.status(200).json({
      ok: true,
      data: isDeleted,
      message: 'message deleted successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: isDeleted,
      message: 'user is not deleted',
      error: e
    });
  }
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
