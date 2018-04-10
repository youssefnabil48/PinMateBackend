var mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    posted_at :{
      type : Date,
      default : Date.now(),
      required : true
    },
    caption : {
      type : String
    },
    user : {
      type : mongoose.Schema.ObjectId,
      ref : "User",
      required : true
    },
    place : {
      type : mongoose.Schema.ObjectId,
      ref : "Place"
    },
    file : {
      type : String,
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
StorySchema.statics.getByUser = function(){

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
StorySchema.statics.getByPlace = function(){

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
StorySchema.statics.updateStory = function(){

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
StorySchema.statics.deleteStory = function(){

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
StorySchema.statics.createStory = function(){

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
StorySchema.statics.getFile = function(){

}

mongoose.model('Story', StorySchema);
