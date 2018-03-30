var mongoose = require('mongoose');
var EmailController = require('../controllers/emailController');

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
      type : mongoose.types.ObjectId,
      required : true
    },
    count : {
      type : Number
    }
  }],
  friends : [mongoose.types.ObjectId],
  blocks : [mongoose.types.ObjectId],
  views : [{
    user_id : {
      type : mongoose.types.ObjectId,
      required : true
    },
    count : {
      type : Number
    }
  }]
});

mongoose.model('User',UserSchema);

//helper methods
module.exports.getUserById = function(userId,callback){

}
module.exports.getUserByEmail = function(email,callback){

}
module.exports.getUserTkn = function(userId,callback){

}
module.exports.SearchUsersByName = function(name,callback){

}
module.exports.hashPassword = function(pass,hash,callback){

}
module.exports.generateUserTkn = function(userId,gneratedTkn,callback){

}
module.exports.sendEmailToUser = function(userId,callback){

}
