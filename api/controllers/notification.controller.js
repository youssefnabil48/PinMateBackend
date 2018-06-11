var mongoose = require('mongoose');
var Notification = mongoose.model('Notification');
var User = mongoose.model('User');
const PushNotifications = require('@pusher/push-notifications-server');
var request = require('request');
var FCM = require('fcm-node');
var serverKey = 'AAAAT0jAPlE:APA91bEYnW2O5RDQ9DqQrGmeZwagvumkHY97zXhu436uBV_3iqoe2M7TplhTtnCM7aKIRzLfDuL-x4UgDCdSF6lyM_rA2Vs9gW53ztSi_y6t5us6iRLxGC31CDZcN66msSkE-i7eawXZ';


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getUserNotifications = function(req, res) {

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
module.exports.create =  function(req, res) {
          Notification.sendNotification(req.params.userToken,"heytherre");
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

};
