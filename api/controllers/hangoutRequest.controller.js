var mongoose = require('mongoose');
var HangoutRequest = mongoose.model('HangoutRequest');


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getAll = function(req, res) {
  var hangoutRequests = HangoutRequest.find(function(err, tests) {
      if (err)
          res.status(500).json({ error: err });
      else {
          if (!hangoutRequests) {
              res.json({ msg: "no object found" });
          } else {
              res.json({
                  msg: "success",
                  hangoutRequests: hangoutRequests
              });
          }
      }
  });
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
  var hangoutRequest = HangoutRequest({ _id: req.params.id });
  var foundHangoutequest = HangoutRequest.findOne(hangoutRequest, function(err, foundHangoutequest) {
      if (err)
          res.status(500).json({ error: err });
      else {
          if (!foundHangoutequest) {
              res.json({ msg: "no object found" });
          } else {
              res.json({
                  msg: "success",
                  hangoutRequests: foundHangoutequest
              });
          }
      }
    });
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
module.exports.create = function(req, res) {
 console.log(req.body.title);
  var h = new HangoutRequest({
    title : req.body.title,
//    date : req.body.date,
    description : req.body.description,
//    start_time : req.body.start_time,
    created_by : req.body.created_by,
    responded_by : req.body.responded_by
  });
  h.save(function(err) {
      if (err) {
          res.status(500).json({ error: err });
      } else {
          res.json({ msg: "success" });
      }
  });
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
