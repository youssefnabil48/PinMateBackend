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
    type : mongoose.Schema.ObjectId,
    ref : "User",
    required : true
  },

  responded_by : [
      {
      user_id : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true,
      },
      status : {
        type : Boolean,
        required : true
      }
    }
  ]
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
HangoutRequestSchema.statics.createRequest = function(){

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
HangoutRequestSchema.statics.respond = function(){

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
HangoutRequestSchema.statics.getRequestById = function(){

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
HangoutRequestSchema.statics.getUserRequests = function(){

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
HangoutRequestSchema.statics.update = function(){

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
HangoutRequestSchema.statics.deleteRequest = function(){

}



mongoose.model('HangoutRequest',HangoutRequestSchema);
