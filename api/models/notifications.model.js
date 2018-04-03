var mongoose = require('mongoose');

var NotificationSchema = new mongoose.Schema({
  receiver_id : {
    type : mongoose.Schema.ObjectId,
    ref : "User",
    required : true
  },
  created_at : {
    type : Date,
  default:  Date.now()
  },

  content : {
    type : String,
    required : true
  },

  status : {
    type : Boolean,
    required : true
  },

  Notification_Type : {
    name : {
      type : String,
      required : true
    },

    desription : {
      type : String,
      required : true
    }
  }

});

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
NotificationSchema.statics.getUserNotifications = function(){

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
NotificationSchema.statics.createNotification = function(){

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
NotificationSchema.statics.deleteNotification = function(){

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
NotificationSchema.statics.updateNotification = function(){

}



mongoose.model('Notification',NotificationSchema);
