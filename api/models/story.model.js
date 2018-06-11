var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var randomToken = require('random-token');

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
      required : false
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
StorySchema.statics.getByUser = async function(user){
    try {
        return await this.findOne({user: user});
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
StorySchema.statics.getByPlace = async function(place){
    try {
        return await this.findOne({place: place});
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
StorySchema.statics.updateStory = async function(storyID,updates){
    try {
        return await CRUDHelper.updateModel(this,storyID,updates);
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
StorySchema.statics.deleteStory = async function(id){
    try {
        return await CRUDHelper.deleteModel(this, id);
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
StorySchema.statics.createStory = async function(newStory){
    try {
        return await CRUDHelper.create(this, newStory);
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
StorySchema.statics.getFile = function(){

}

mongoose.model('Story', StorySchema);
