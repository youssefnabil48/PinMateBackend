var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
var EmailController = require('../controllers/email.controller');

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
  mobile_number :{
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
  favorite_places : [{
    type : mongoose.Schema.ObjectId,
    ref : "Place",
    required : true
  }],
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
      type : mongoose.Schema.ObjectId,
      ref : "User",
      required : true
    },
    count : {
      type : Number
    }
  }],
  friends : [{
   type : mongoose.Schema.ObjectId,
   ref : "User"
  }],
  blocks : [{
    type : mongoose.Schema.ObjectId,
    ref : "User"
  }],
  views : [{
    user_id : {
      type : mongoose.Schema.ObjectId,
      required : true
    },
    count : {
      type : Number
    }
  }],
  visit : [{
    place_id : {
      type : mongoose.Schema.ObjectId,
      ref : "Place",
      required : true
    },
    count : {
      type: Number,
      required: true,
      default: 0
    },
    timestamp : {
      type:Date,
      required: true,
      default: Date.now()
    }
  }],
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
UserSchema.statics.getUserById = function(userId){
  try {
    return CRUDHelper.getById(this, userId);
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
UserSchema.statics.getUserByEmail = function(email){

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
UserSchema.statics.getUserTkn = function(userId){

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
UserSchema.statics.getUsersByName = function(name){

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
UserSchema.statics.hashPassword = function(password){

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
UserSchema.statics.generateUserTkn = function(userId,gneratedTkn){

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
UserSchema.statics.sendEmailToUser = function(userId){

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
UserSchema.statics.createUser = function(userId){

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
UserSchema.statics.updateUserInfo = function(userId){

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
UserSchema.statics.deleteUser = function(userId){

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
UserSchema.statics.comparePassword = function (candidatePassword,hash,callback){
	bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
		callback(err, isMatch);
	});
};


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
UserSchema.statics.signIn = function(){

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
UserSchema.statics.signOut = function(){

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
UserSchema.statics.forgetPassword = function(){

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
UserSchema.statics.deleteUser = function(userId){

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
UserSchema.statics.verifyEmail = function(userId){

}

mongoose.model('User',UserSchema);

//generating dummy object

//var dummy = require('mongoose-dummy');
// const ignoredFields = ['_id', 'created_at', '__v'];
// var randomObject = dummy(mongoose.model('User',UserSchema), {
//     ignore: ignoredFields,
//     returnDate: true
// })
// console.log(randomObject);
