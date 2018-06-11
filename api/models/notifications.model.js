var mongoose = require('mongoose');
var User = mongoose.model ('User');
const PushNotifications = require('@pusher/push-notifications-server');


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
NotificationSchema.statics.sendNotification = async function(user,content){
  try{

    let pushNotifications = new PushNotifications({
      instanceId: '27e97326-f21c-4a92-8713-1dda5cbc88e3',
      secretKey: '669C8EA5410C253BB28A32C83579B86'
    });
    let publishResponse = await pushNotifications.publish(['hello'], {
    apns: {
      aps: {
        alert: 'Hello!'
      }
    },
    fcm: {
      notification: {
        title: 'Friend Request',
        body: 'Ahmad sent you a friend request'
      }
    }
  });
    console.log('Just published:', publishResponse.publishId);
  } catch (e)
  {
    console.log(e);
    //throw e;
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
