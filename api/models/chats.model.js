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

mongoose.model('Chat',ChatSchema);
