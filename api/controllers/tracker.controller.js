var mongoose = require('mongoose');
var Tracker = mongoose.model('Tracker');


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getFriendsTracker = function(req, res) {

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
module.exports.get = function(req, res) {

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
module.exports.create = async function(req, res) {
  
    try{
        var dummy = require('mongoose-dummy');
        const ignoredFields = ['_id', '__v'];
        var randomObject = dummy(Tracker, {
            ignore: ignoredFields,
            returnDate: true
        })
      
      
        var t = new Tracker(randomObject);
        var x = await Tracker.createTracker(t);
        
         res.send(randomObject);
      } catch (e)
      {
        console.log(e);
        //throw e;
      }
    
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
