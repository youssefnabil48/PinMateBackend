var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
<<<<<<< HEAD
name : {
  type: String,
  required: true
},
icon : {
  type: String,
  required: true
},
description : {
  type: String,
  required: true
},
longitude : {
  type: String,
  required: true
},
latitude : {
  type: String,
  required: true
},
picture : {
  type:String,
  required: true
},
phone_number : {
  type: String,
  required: true
},
event_id : {
  type : mongoose.Schema.Types.ObjectId,
  ref:"Event",
  required: false
},
review_id : {
  type : mongoose.Schema.Types.ObjectId,
  ref:"Review",
  required: false
},
story_id : {
  type : mongoose.Schema.Types.ObjectId,
  ref:"Story",
  required: false
},
visit : {
  type : mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: false,
  count : {
    type: Number,
    required: true,
    default: 0
  },
  timestamp : {
    type:Date,
    required: true,
    default: Date.now()
=======
  name : {
    type: String,
    required: true
  },
  icon : {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
  longitude : {
    type: String,
    required: true
  },
  latitude : {
    type: String,
    required: true
  },
  picture : {
    type:String,
    required: true
  },
  phone_number : {
    type: String,
    required: true
  },
  event_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref:"Event",
    required: false
  },
  review_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref:"Review",
    required: false
  },
  story_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref:"Story",
    required: false
  },
  visit : {
    type : mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
    count : {
      type: Number,
      required: true,
      default: 0
    },
    timestamp : {
      type:Date,
      required: true,
      default: Date.now()
    }
>>>>>>> cd8a02feb3441771af8f2bfb5f09f634983f4db0
  }
});

mongoose.model('Place',PlaceSchema);
