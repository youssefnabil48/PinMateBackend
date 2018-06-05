var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
var PostSchema = new mongoose.Schema();
var User = mongoose.model('User');

PostSchema.add({
  content : {
    type : String,
    required : true
  },
  created_at : {
    type : Date,
    default : Date.now()
  },
  user : {
    type : mongoose.Schema.ObjectId,
    ref : "User"
  },
  //how to embed object from itself
  //posts : [PostSchema],
  likes : [{
    user_id : {
      type : mongoose.Schema.ObjectId,
      ref : "User"
    }
  }]
});
mongoose.model('Post',PostSchema);
var Post = mongoose.model('Post');


var EventSchema = new mongoose.Schema({
  description : {
    type : String
  },
  name : {
    type : String,
    required : true
  },
  start_date : {
    type : Date,
    default : Date.now(),
    required : true
  },
  end_date : {
    type : Date,
    default : Date.now()
  },
  posts : [PostSchema]

});
mongoose.model('Event',EventSchema);
var Event = mongoose.model('Event');

var ReviewSchema = new mongoose.Schema({
  content : {
    type : String,
  },
  rating : {
    type : Number,
    required : true
  },
  created_at : {
    type : Date,
    default : Date.now(),
    required : true
  },
  user_id : {
    type : mongoose.Schema.ObjectId,
    ref : "User",
    required : true
  }
});
mongoose.model('Review',ReviewSchema);
var Review = mongoose.model('Review');

var PlaceSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  icon : {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
  longitude : {
    type: String,
    required: true
  },
  latitude : {
    type: String,
    required: true
  },
  picture : {
    type:String,
    required: true
  },
  gallery : [{
    type:String,
    required: true
  }],
  mobile_number : {
    type: String,
    required: true
  },
  events : [EventSchema],
  posts : [PostSchema],
  reviews : [ReviewSchema],
  story_id : [{
    type : mongoose.Schema.ObjectId,
    ref:"Story",
    required: false
  }],
  managed_by : {
    type : mongoose.Schema.ObjectId,
    ref : "User"
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
PlaceSchema.statics.createPlace = async function(newPlace){
  try {
  
    return await CRUDHelper.create(this,newPlace);
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
PlaceSchema.statics.deletePlace = async function(id){
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
PlaceSchema.statics.updatePlace = async function(placeId,updates){
  try {

      return await CRUDHelper.updateModel(this,placeId,updates);
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
PlaceSchema.statics.getAll = async function(){
  try {
      return await CRUDHelper.getAll(this);
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
PlaceSchema.statics.getById = async function(id){
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
PlaceSchema.statics.getByName = async function(name){
  try {
    return await CRUDHelper.getByName(this, name);
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
PlaceSchema.statics.favoritePlace = async function(userId,placeId){
  try {
    var user = await User.getUserById(userId);
    console.log(user);
    await user.favorite_places.push(placeId);
    return await user.save();
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
PlaceSchema.statics.unfavoritePlace = async function(userId,placeId){
  try {
    var user = await User.getUserById(userId);
    console.log(user);
    await user.favorite_places.id(placeId).remove();
    return await user.save();
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
PlaceSchema.statics.addPost = async function(place,newPost){
      try {
       var p = new Post(newPost);
       //add post to place
       await place.posts.push(p);
       return await place.save();
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
PlaceSchema.statics.deletePost = async function(place,postId){
  try {
     await place.posts.id(postId).remove();
    return await place.save();
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
PlaceSchema.statics.addEvent = async function(place,newEvent){
    try {
     var ev = new Event(newEvent);
     //add post to place
     await place.events.push(ev);
     return await place.save();
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
PlaceSchema.statics.deleteEvent = async function(place,eventId){
    try {
      await place.events.id(eventId).remove();
      return await place.save();
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
PlaceSchema.statics.updateEvent = async function(place,eventId,newValues){
  try {
      var ev = await place.events.id(eventId);
      await ev.set(newValues);
     return await place.save();
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
PlaceSchema.statics.addReview = async function(place,newReview){
    try {
     var rev = new Review(newReview);
     await place.reviews.push(rev);
     return await place.save();
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
PlaceSchema.statics.deleteReview = async function(place,reviewId){
    try {
      await place.reviews.id(reviewId).remove();
      return await place.save();
    } catch (e) {
      console.log(e);
      throw e;
    }
}

mongoose.model('Place',PlaceSchema);

//generating dummy object
