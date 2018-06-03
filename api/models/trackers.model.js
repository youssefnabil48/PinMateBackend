var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');

var TrackerSchema = new mongoose.Schema({
    source : {
      type : String,
      required : true
    },
    destination : {
      type : String,
      required : true
    },
    created_at : {
      type : Date,
      default : Date.now()
    },
    eta : {
      type : Number
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
TrackerSchema.statics.getFriendsTracker = function(){

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
TrackerSchema.statics.createTracker = function(){

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
TrackerSchema.statics.getTrackerById = function(id){
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
TrackerSchema.statics.deleteTracker = function(){

}

mongoose.model('Tracker',TrackerSchema);
