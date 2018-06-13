var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
// require('../models/trackers.model.js');
var Place = mongoose.model ('Place');
const PushNotifications = require('@pusher/push-notifications-server');

module.exports.test = async function(req, res){
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
