var mongoose = require('mongoose');

var NotificationSchema = new mongoose.Schema({
  receiver_id : {
    type : mongoose.Schema.Type.ObjectId,
    ref : User,
    required : true;
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

mongoose.model('Notification',NotificationSchema);
