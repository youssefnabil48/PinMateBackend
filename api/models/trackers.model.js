var mongoose = require('mongoose');

var TrackerSchema = new mongoose.Schema({
    source : {
      type : String,
      required : true
    },
    destination : {
      type : String,
      required : true
    },
    created_at : {
      type : Date,
      default : Date.now()
    }
});

mongoose.model('Tracker',TrackerSchema);
