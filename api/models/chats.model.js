var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
  created_at : {
    type : Date,
   default :  Date.now()
  },
  content : {
    type : String,
    required: true
  },
  status : {
    type : Boolean,
    required : true
  },
  delivered : {
    type : Boolean,
    required : true
  },
  sender_id :  {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
  },
  receiver_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
  }
});

//helper functions

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
ChatSchema.statics.getChatById = function(){

}

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
ChatSchema.statics.getUserChatList = function(){

}

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
ChatSchema.statics.getChatBetweenTwoUsers = function(){

}

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
ChatSchema.statics.createMessage = function(){

}


mongoose.model('Chat',ChatSchema);
