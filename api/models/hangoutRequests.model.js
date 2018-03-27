var mongoose = require('mongoose');

var HangoutRequestSchema = new mongoose.Schema({
  date : {
    type : Date,
    default : Date.now()
  },
  description : {
    type : String,
    required : false
  },
  start_time : {
    type : Date,
    default : Date.now()
  },
  title : {
    type : String,
    required : true
  },

  created_by : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
  },

  responded_by : [
    response : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
  } ,
  status : {
    user_id : mongoose.Schema.Types.ObjectId,
    ref : "User",
    type : Boolean,
    required : true
  }
]
});

mongoose.model('HangoutRequest',HangoutRequestSchema);
