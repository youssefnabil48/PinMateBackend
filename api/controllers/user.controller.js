var mongoose = require('mongoose');
var User = mongoose.model('User');
var validator = require('indicative');


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getAll = async function(req, res) {
  try {
    var users = await User.getAll();
    if(users.lenght <= 0){
      res.status(200).json({
        ok: true,
        data: users,
        message: 'no users found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: users,
      message: 'users loaded successfully',
      error:null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
  }
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
module.exports.get = async function(req, res) {
  try {
    var user = await User.getById(req.params.id);
    if(!user){
      res.status(200).json({
        ok: true,
        data: user,
        message: 'no user found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: user,
      message: 'user found',
      error:null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
  }
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
module.exports.create = async function(req, res) {
  try {
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      avatar: req.body.avatar,
      gender: req.body.gender,
      picture: req.body.picture,
      username: req.body.username,
      password: User.hashPassword(req.body.password),
      birth_date: req.body.birth_date,
      home_location: req.body.home_location,
      reset_pw_tkn, req.body.reset_pw_tkn,
      mobile_number, req.body.mobile_number,
      email_verification_tkn: req.body.email_verification_tkn,
      views: req.body.views,
      visit: req.body.visit,
      chat: req.body.chat,
      favorite_places: req.body.favorite_places,
      friends: req.body.friends,
      blocks: req.body.blocks
    });
    let newUser = await User.create(user);
    res.status(200).json({
      ok: true,
      data: newUser,
      message: 'user created successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
  }
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
module.exports.update = function(req, res) {

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
module.exports.delete = function(req, res) {
  try {
    var isDeleted = await User.deleteUser(req.params.id);
    if(!isDeleted){
      res.status(200).json({
        ok: true,
        data: isDeleted,
        message: 'user is not deleted',
        error: null
      });
    }
    res.status(200).json({
      ok: true,
      data: isDeleted,
      message: 'user deleted successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: isDeleted,
      message: 'user is not deleted',
      error: e
    });

  }

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
module.exports.signIn = function(req, res) {

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
module.exports.signOut = function(req, res) {

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
module.exports.verifyEmail = function(req, res) {

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
module.exports.forgetPassword = function(req, res) {

};
