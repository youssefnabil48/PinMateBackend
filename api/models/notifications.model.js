var mongoose = require('mongoose');
var User = mongoose.model ('User');
const PushNotifications = require('@pusher/push-notifications-server');
var request = require('request');
var FCM = require('fcm-node');
var serverKey = 'AAAAT0jAPlE:APA91bEYnW2O5RDQ9DqQrGmeZwagvumkHY97zXhu436uBV_3iqoe2M7TplhTtnCM7aKIRzLfDuL-x4UgDCdSF6lyM_rA2Vs9gW53ztSi_y6t5us6iRLxGC31CDZcN66msSkE-i7eawXZ';




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
NotificationSchema.statics.sendNotification =  function(userToken,content){
  var fcm = new FCM(serverKey);
//  var userToken = user.notification_token;
      var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
          to: userToken,
          notification: {
              title: 'PinMate',
              body: content
          },
          // data: {  //you can send only notification or only data(or include both)
          //     my_key: 'my value',
          //     my_another_key: 'my another value'
          // }
      }
      fcm.send(message, function(err, response){
          if (err) {
              console.log("Something has gone wrong!",response);
          } else {
              console.log("Successfully sent with response: ", response);
          }
      });
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
