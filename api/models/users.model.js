var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  username : {
    type: String,
    required: true,
  },
  email : {
    type: String,
    required: true
  },
  password : {
    type: String,
    required: true
  },
  gender : {
    type: String,
    required: true
  },
  birth_date : {
    type: Date,
    required: true
  },
  picture : {
    type: String,
    required: true
  },
  avatar : {
    type: String,
    required: true
  },
  phone_number : {
    type: String,
    required: true
  },
  home_location : {
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
  user_tkn : {
    type: String,
    required: true
  },
  email_verification_tkn : {
    type: String
  },
  reset_pw_tkn : {
    type: String
  }
});

mongoose.model('User',UserSchema);
//example code of hotel model and mongoose SCHEMAS
/*
var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  rating : {
    type : Number,
    required : true,
    min : 0,
    max : 5
  },
  review : {
    type : String,
    required : true
  },
  createdOn : {
    type : Date,
    "default" : Date.now
  }
});

var roomSchema = new mongoose.Schema({
  type : String,
  number : Number,
  description : String,
  photos : [String],
  price : Number
});

var hotelSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  stars : {
    type : Number,
    min : 0,
    max : 5,
    default : 0
  },
  services : [String],
  description : String,
  photos : [String],
  currency : String,
  reviews : [reviewSchema],
  rooms : [roomSchema],
  location : {
    address : String,
    // Always store coordinates longitude (East/West), latitude (North/South) order.
    coordinates : {
      type : [Number],
      index : '2dsphere'
    }
  }
});

mongoose.model('Hotel', hotelSchema);
*/
