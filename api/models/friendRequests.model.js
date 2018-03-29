var mongoose = require('mongoose');

var FriendRequestSchema = new mongoose.Schema({
  created_at : {
    type : Date,
    default : Date.now()
  },
  status : Boolean,

  sender_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },

  receiver_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
    }  
});

mongoose.model('FriendRequest',FriendRequestSchema);
