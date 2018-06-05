var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
var User = mongoose.model('User');
//var Tracker = mongoose.model('Tracker');

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
TrackerSchema.statics.getFriendsTracker = async function(user_id){
    try {
        var user = User.getById(user_id);
        for (var i=0; i<user.friends.length; i++){
            var u = User.getById(user.friends[i]);
            await this.getTrackerById(u.tracker_id);
        }
    }
    catch (e)
    {
        console.log(e);
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
TrackerSchema.statics.createTracker = async function(newTracker){
    try{
      //  var t = new Tracker(newTracker);
      console.log(newTracker);
       return await CRUDHelper.create(this, newTracker);
    } catch (e)
    {
         console.log(e);
        // throw e;
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
TrackerSchema.statics.getTrackerById = async function(id){
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
TrackerSchema.statics.deleteTracker = async function(id){
    try {
        return await CRUDHelper.deleteModel(this, id);
    } catch (e)
    {
        console.log(e);
        throw e;
    }
}

mongoose.model('Tracker',TrackerSchema);