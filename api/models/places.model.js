var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema();
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
  },
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
PlaceSchema.statics.createPlace = function(){

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
PlaceSchema.statics.deletePlace = function(){

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
PlaceSchema.statics.updatePlace = function(){

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
PlaceSchema.statics.getAll = function(){

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
PlaceSchema.statics.getById = function(){

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
PlaceSchema.statics.getByName = function(){

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
PlaceSchema.statics.favoritePlace = function(){

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
PlaceSchema.statics.unfavoritePlace = function(){

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
PlaceSchema.statics.addPost = function(){

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
PlaceSchema.statics.deletePost = function(){

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
PlaceSchema.statics.addEvent = function(){

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
PlaceSchema.statics.deleteEvent = function(){

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
PlaceSchema.statics.updateEvent = function(){

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
PlaceSchema.statics.addReview = function(){

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
PlaceSchema.statics.deleteReview = function(){

}

mongoose.model('Place',PlaceSchema);

//generating dummy object

var dummy = require('mongoose-dummy');
const ignoredFields = ['_id', 'created_at', '__v'];
var randomObject = dummy(mongoose.model('Place',PlaceSchema), {
    ignore: ignoredFields,
    returnDate: true
})
console.log(randomObject);
