var mongoose = require('mongoose');
var EmailController = require('../controllers/email.controller');
var dummy = require('mongoose-dummy');

var UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true,
    index : true
  },
  username : {
    type: String,
    required: true,
    index : true
  },
  email : {
    type: String,
    required: true,
    index : true
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
  avatar :{
    type: String,
    required: true
  },
  phone_number :{
    type: String,
    required: true
  },
  home_location :{
    type: String,
    required: true
  },
  location :{
    longitude :{
      type: String,
      required: true
    },
    latitude : {
      type: String,
      required: true
    }
  },
  user_tkn : {
    type: String,
    required: true
  },
  email_verification_tkn : {
    type: String,
    required: true
  },
  reset_pw_tkn : {
    type: String,
    required: true
  },
  chat : [{
    user_id : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "User",
      required : true
    },
    count : {
      type : Number
    }
  }],
  //friends : [{
  //  type : mongoose.Schema.Types.ObjectId,
  //  ref : "User"
  //}],
  blocks : [{
    type : mongoose.Schema.types.ObjectId,
    ref : "User"
  }],
  views : [{
    user_id : {
      type : mongoose.Schema.Types.ObjectId,
      required : true
    },
    count : {
      type : Number
    }
  }]
});

//helper methods
/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
UserSchema.statics.getUserById = function(userId,callback){

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
UserSchema.statics.getUserByEmail = function(email,callback){

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
UserSchema.statics.getUserTkn = function(userId,callback){

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
UserSchema.statics.SearchUsersByName = function(name,callback){

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
UserSchema.statics.hashPassword = function(pass,hash,callback){

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
UserSchema.statics.generateUserTkn = function(userId,gneratedTkn,callback){

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
UserSchema.statics.sendEmailToUser = function(userId,callback){

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
UserSchema.statics.createUser = function(userId,callback){

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
UserSchema.statics.updateUSerInfo = function(userId,callback){

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
UserSchema.statics.deleteUser = function(userId,callback){

}
var model = mongoose.model('User',UserSchema);

const ignoredFields = ['_id', 'created_at', '__v'];
var randomObject = dummy(model, {
    ignore: ignoredFields,
    returnDate: true
})
console.log(randomObject);
