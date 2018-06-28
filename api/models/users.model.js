var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
var EmailController = require('../controllers/email.controller');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var randomToken = require('random-token');

// HOME LOCATION IS NOT A STRING ITS AN OBJECT WHICH HAS LATITUDE AND longitude

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  // username : {
  //   type: String,
  //   required: true,
  //   index : true
  // },
  email: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    default: 'male'
  },
  birth_date: {
    type: String,
    // required: true
  },
  picture: {
    type: String,
    // required: true
  },
  avatar: {
    type: String,
    // required: true
  },
  mobile_number: {
    type: String,
    // required: true
  },
  home_location: {
    longitude: {
      type: Number
    },
    latitude: {
      type: Number,
    }
  },
  current_location: {
    longitude: {
      type: Number
    },
    latitude: {
      type: Number,
    }
  },
  home_address: String,

  //ka s
  favorite_places: [{
    type: mongoose.Schema.ObjectId,
    ref: "Place",
    // required : true
  }],
  email_verification_tkn: {
    type: String,
    // required: true
  },
  reset_pw_tkn: {
    type: String,
    // required: true
  },
  chat: [{
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      // required : true
    },
    count: {
      type: Number
    }
  }],
  friends: [{
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }],
  blocks: [{
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }],
  views: [{
    user_id: {
      type: mongoose.Schema.ObjectId,
      // required : true
    },
    count: {
      type: Number
    }
  }],
  visit: [{
    place_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Place",
      // required : true
    },
    count: {
      type: Number,
      required: true,
      default: 0
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now()
    }
  }],
  tracker_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Tracker",
  },
  notification_token : String
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
UserSchema.statics.getUserById = async function (userId) {
  try {
    return await CRUDHelper.getById(this, userId);
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
UserSchema.statics.getUserByEmail = async function (email) {
  try {
    return await this.findOne({
      email: email
    });
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
UserSchema.statics.getUsersByName = async function (name) {
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
UserSchema.statics.hashPassword = async function (password) {
  try {
    if (!password) {
      throw 'password is undefined';
    }
    var hash = await bcrypt.hash(password, 10);
    return hash;
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
UserSchema.statics.sendEmailToUser = async function (userId, subject, content) {
  try {
    var user = this.getById(userId);
    return EmailController.sendEmail(user.email, subject, content);
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
UserSchema.statics.createUser = async function (newUser) {
  try {
    return await CRUDHelper.create(this, newUser);
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
UserSchema.statics.updateUser = async function (userId, updates) {
  try {
    return await CRUDHelper.updateModel(this, userId, updates);
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
UserSchema.statics.deleteUser = async function (userId) {
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
UserSchema.statics.forgetPassword = async function (userAuthToken) {
  try {
    var user = await jwt.verjwt.verify(userAuthToken, 'secret');
    var resetToken = randomToken(16);
    await this.sendEmailToUser(user.email, 'Resetting Password Request', resetToken);
    return resetToken;
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
UserSchema.statics.deleteUser = async function (userId) {
  try {
    return await CRUDHelper.deleteModel(this, userId);
  } catch (e) {
    console.log(e);
    throw e;
  }
}

mongoose.model('User', UserSchema);

//generating dummy object

//var dummy = require('mongoose-dummy');
// const ignoredFields = ['_id', 'created_at', '__v'];
// var randomObject = dummy(mongoose.model('User',UserSchema), {
//     ignore: ignoredFields,
//     returnDate: true
// })
// console.log(randomObject);
