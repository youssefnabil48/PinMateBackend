var mongoose = require('mongoose');
var User = mongoose.model('User');
const { validateAll } = require('indicative');
var jwt = require('jsonwebtoken');
var CRUDHelper = require('../helpers/CRUD.helper');
var bcrypt = require('bcrypt');

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
    var users = await User.find();
    if(users.length <= 0){
      res.status(200).json({
        ok: true,
        data: users,
        message: 'No users found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: users,
      message: 'Users loaded successfully',
      error:null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
      error: e
    });
  }
};



module.exports.get = async function(req, res) {
  try {
    const rules = {
      id: 'required'
    };
    await validateAll(req.params, rules);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      ok: false,
      data: null,
      message: 'Validation error, bad request',
      error: e
    });
    return;
  }
  try {
    var user = await User.getUserById(req.params.id);
    if(!user){
      res.status(200).json({
        ok: true,
        data: user,
        message: 'User not found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: user,
      message: 'User found',
      error:null
    });
  } catch (e){
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
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
    const rules = {
      name: 'required',
      email: 'required|email',
      password: 'required'
    };
    await validateAll(req.body, rules);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      ok: false,
      data: null,
      message: 'Validation error, bad request',
      error: e
    });
    return;
  }

  try {
    var hashedPassword = await User.hashPassword(req.body.password);
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      avatar: req.body.avatar,
      gender: req.body.gender,
      picture: req.body.picture,
      password: hashedPassword,
      birth_date: req.body.birth_date,
      home_location: req.body.home_location,
      current_location : req.body.current_location,
      home_adress: req.body.home-address,
      reset_pw_tkn: req.body.reset_pw_tkn,
      mobile_number: req.body.mobile_number,
      email_verification_tkn: req.body.email_verification_tkn,
      views: req.body.views,
      visit: req.body.visit,
      chat: req.body.chat,
      favorite_places: req.body.favorite_places,
      friends: req.body.friends,
      blocks: req.body.blocks,
      notification_token: req.body.notification_toke
    });
    let newUser = await User.create(user);
    res.status(200).json({
      ok: true,
      data: newUser,
      message: 'User created successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
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

module.exports.update = async function(req, res) {
  try {
      var userId = req.params.id;
      let newUser = await User.updateUser(userId,req.body);
      res.status(200).json({
        ok: true,
        data: newUser,
        message: 'User updated successfully',
        error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
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
module.exports.delete = async function(req, res) {
  try {
    const rules = {
      id: 'required'
    };
    await validateAll(req.params, rules);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      ok: false,
      data: null,
      message: 'Validation error, bad request',
      error: e
    });
    return;
  }

  try {
    var isDeleted = await User.deleteUser(req.params.id);
    if(!isDeleted){
      res.status(200).json({
        ok: true,
        data: isDeleted,
        message: 'User is not deleted',
        error: null
      });
    }
    res.status(200).json({
      ok: true,
      data: isDeleted,
      message: 'User deleted successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: isDeleted,
      message: 'User is not deleted',
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
module.exports.signIn = async function(req, res) {
  try {
    const rules = {
      email: 'required|email',
      password: 'required'
    };
    await validateAll(req.body, rules);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      ok: false,
      data: null,
      message: 'Validation error, bad request',
      error: e
    });
    return;
  }

  try {
    var user = await User.getUserByEmail(req.body.email);
    if(!user){
      res.status(200).json({
        ok: true,
        data: null,
        message: 'User not found',
        error: null
      });
      return;
    }
    var isMatch = await bcrypt.compare(req.body.password, user.password);
    console.log(isMatch);
    if(!isMatch){
      res.status(403).json({
        ok: true,
        data: null,
        message: 'Wrong email or password',
        error: null
      });
      return;
    }
    var token = jwt.sign({user}, 'secret');
    res.status(200).json({
      ok: true,
      data: {
        'token' : token,
        'user' : user
      },
      message: 'User logged in successfully',
      error: null
    });

  } catch (e) {
     console.log(e);
     res.status(500).json({
       ok: false,
       data: null,
       message: 'Error while login',
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
module.exports.forgetPassword = async function(req, res) {
  try {
    var token = User.forgetPassword(req.headers.authorization);
    res.status(200).json({
      ok: true,
      data: {'forgetPasswordToken' : token},
      message: 'Forget password is requested pleace check your email',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
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
module.exports.addNotificationToken = async function(req, res) {
  try {
    var userId = mongoose.Types.ObjectId(req.body.userId);
    var result = await User.updateUserInfo(userId, {notification_token: req.body.token});
    var user = await User.getUserById(userId);
    if(user.notification_token != req.body.token){
      res.status(500).json({
        ok: false,
        data: null,
        message: 'Unable to add device token',
        error: 'key doesn\'t match user key'
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: null,
      message: 'Notification token added successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
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
module.exports.verifyEmail = async function(req, res) {

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
module.exports.getUserFriends = async function(req, res) {
  try {
    var userId = req.params.id;
    var user = await User.getUserById(userId);
    var users = [];
    for (let i = 0; i < user.friends.length; i++) {
      const friendId = user.friends[i];
      const friend = await User.getUserById(friendId); 
      users.push(friend);   
    }
    res.status(200).json({
      ok: true,
      data: users,
      message: 'friends loades successfully',
      error: null
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
      error: e
    });
  }
};