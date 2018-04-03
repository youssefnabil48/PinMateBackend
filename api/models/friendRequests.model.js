var mongoose = require('mongoose');

var FriendRequestSchema = new mongoose.Schema({
  created_at : {
    type : Date,
    default : Date.now()
  },
  status : Boolean,

  sender_id : {
    type : mongoose.Schema.ObjectId,
    ref : "User"
  },

  receiver_id : {
    type : mongoose.Schema.ObjectId,
    ref : "User"
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
FriendRequestSchema.statics.createRequest = function(){

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
FriendRequestSchema.statics.respond = function(){

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
FriendRequestSchema.statics.getRequestById = function(){

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
FriendRequestSchema.statics.getUserRequests = function(){

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
FriendRequestSchema.statics.deleteRequest = function(){

}


mongoose.model('FriendRequest',FriendRequestSchema);
