var mongoose = require('mongoose');

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
    eta : function(){
      //it will look something like that
      /*
        var eta = Date.now() - created_at;
        return eta;
      */
    },
    users : [{
      userId : mongoose.types.ObjectId
    }]
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
TrackerSchema.statics.getAll = function(){

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
TrackerSchema.statics.getTrackerById = function(){

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


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
TrackerSchema.statics.addUser = function(){

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
TrackerSchema.statics.removeUser = function(){

}

mongoose.model('Tracker',TrackerSchema);
