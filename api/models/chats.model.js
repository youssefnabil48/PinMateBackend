var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');

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
    type : mongoose.Schema.ObjectId,
    ref : "User",
    required : true
  },
  receiver_id : {
    type : mongoose.Schema.ObjectId,
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
ChatSchema.statics.getChatById = function(id){
  try {
    return CRUDHelper.getById(this, id);
  } catch (e) {
    console.log(e);
    throw e;
  }
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
ChatSchema.statics.getChatBetweenTwoUsers = async function(firstUserId, secondUserId){
  try {
    var chat = await this.find({
      $or:[
        {sender_id: {$in: [firstUserId, secondUserId]}},
        {receiver_id: {$in: [firstUserId, secondUserId]}}
      ]
    });
    return chat;
  } catch (e) {
    console.log(e);
    throw e;
  }
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
ChatSchema.statics.createMessage = async function(senderId, receiverId, content, status, delivered){
  try {
    let message = new this({
      created_at: Date.now(),
      sender_id: senderId,
      receiver_id: receiverId,
      content: content,
      delivered: delivered,
      status: status
    });
    return await message.save();
  } catch (e) {
    console.log(e);
    throw e;
  }
}


mongoose.model('Chat',ChatSchema);
