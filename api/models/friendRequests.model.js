var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
var User = mongoose.model('User');

var FriendRequestSchema = new mongoose.Schema({
  created_at : {
    type : Date,
    default : Date.now()
  },
  status : Boolean,

  sender_id : {
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
FriendRequestSchema.createRequest = async function(newRequest){
    try{
       
        return await CRUDHelper.create(this, newRequest);
        
    } catch (e)
    {
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
FriendRequestSchema.statics.getRequestById = async function(id){
  try {
    return await CRUDHelper.getById(this, id);
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
FriendRequestSchema.statics.getUserRequests = async function(rcvrId){
   try {
        var userRequests = await this.find({
        receiver_id : rcvrId});
        return userRequests;
   } catch (e)
   {
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
FriendRequestSchema.statics.deleteRequest = async function(id){
    try {
        return await CRUDHelper.deleteModel(this, id);
    } catch (e)
    {
        console.log (e);
        throw e;
    }
}


mongoose.model('FriendRequest',FriendRequestSchema);
