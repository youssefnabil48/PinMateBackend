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
    },
    ETA : function(){
      //it will look something like that
      /*
        var eta = Date.now() - created_at;
        return eta;
      */
    }
});

mongoose.model('Tracker',TrackerSchema);
