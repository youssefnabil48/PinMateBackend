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
    user_id : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true
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
        var user = await User.getUserById(user_id);
        var trackers = [];
        for (let i=0; i<user.friends.length; i++){
            var u = await User.getUserById(user.friends[i]);
            var tracker = await this.findOne({
                user_id: u.id 
            });
            if(tracker){
                trackers.push(tracker);
            }
        }
        console.log(trackers);
        return trackers;
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
TrackerSchema.statics.updateTracker = async function(trackerId,updates){

    try {
        return await CRUDHelper.updateModel(this,trackerId,updates);
    }
     catch (e) {
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
