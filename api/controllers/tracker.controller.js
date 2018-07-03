var mongoose = require('mongoose');
var Tracker = mongoose.model('Tracker');
var User = mongoose.model('User');

const { validateAll } = require('indicative');

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getFriendsTracker = async function(req, res) {

    try {
        var trackers = await Tracker.getFriendsTracker(req.params.id);
        var senders = [];
        for(let i =0;i<trackers.length;i++) {
            const user = await User.getUserById(trackers[i].user_id);
            const u = new User({
              name : user.name,
              id : user.id,
              picture : user.picture,
              current_location : user.current_location
            });
            senders.push(u);
        }
        if(trackers.length <= 0){
          res.status(200).json({
            ok: true,
            data: trackers,
            message: 'No trackers found',
            error:null
          });
          return;
        }
        res.status(200).json({
          ok: true,
          data: trackers,
          friends : senders,
          message: 'Trackers loaded successfully',
          error:null
        });
      } catch (e) {
        console.log(e);
        res.status(500).json({
          ok: false,
          data: null,
          message: 'Internal server error',
          error: e
        });
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
module.exports.get = async function(req, res) {
    try {
        const rules = {
          id: 'required'
        };
        await validateAll(req.params, rules);
      } catch (e) {
        console.log(e);
        res.status(400).json({
          ok: false,
          data: null,
          message: 'Validation error, bad request',
          error: e
        });
        return;
      }
      try {
        var tracker = await Tracker.getTrackerById(req.params.id);
        if(!tracker){
          res.status(200).json({
            ok: true,
            data: tracker,
            message: 'Tracker not found',
            error:null
          });
          return;
        }
        res.status(200).json({
          ok: true,
          data: tracker,
          message: 'Tracker loaded successfully',
          error:null
        });
      } catch (e) {
        console.log(e);
        res.status(500).json({
          ok: false,
          data: null,
          message: 'Internal server error',
          error: e
        });
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
module.exports.create = async function(req, res) {

    try {
        const rules = {
            source: 'required',
            destination: 'required',
            user_id: 'required'
        };
        await validateAll(req.body, rules);
    } catch (e) {
        console.log(e);
        res.status(400).json({
            ok: false,
            data: null,
            message: 'Validation error, bad request',
            error: e
        });
        return;
    }

    try {
        var tracker = new Tracker({
            source: req.body.source,
            destination: req.body.destination,
            created_at: req.body.created_at,
            user_id : req.body.user_id,
            eta: req.body.eta,
        });
        let newTracker = await Tracker.create(tracker);
        res.status(200).json({
            ok: true,
            data: newTracker,
            message: 'Tracker created successfully',
            error: null
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            data: null,
            message: 'Internal server error',
            error: e
        });
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
module.exports.update = async function(req, res) {

  try {
    var trackerId = req.params.id;
    let newTracker = await Tracker.updateTracker(trackerId,req.body);
    if(!newTracker){
        res.status(200).json({
          ok: true,
          data: newTracker,
          message: 'Tracker was not updated',
          error:null
        });
        return;
      }
    res.status(200).json({
      ok: true,
      data: newTracker,
      message: 'Request updated successfully',
      error: null
  });
} catch (e) {
  console.log(e);
  res.status(500).json({
    ok: false,
    data: null,
    message: 'Internal server error',
    error: e
  });
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
module.exports.delete = async function(req, res) {

  try {
    const rules = {
      id: 'required'
    };
    await validateAll(req.params, rules);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      ok: false,
      data: null,
      message: 'Validation error, bad request',
      error: e
    });
    return;
  }

    try{
        var tracker = await Tracker.deleteTracker(req.params.id);
        if(!tracker){
          res.status(200).json({
            ok: true,
            data: tracker,
            message: 'Tracker is not deleted',
            error: null
          });
          return;
        }
          res.status(200).json({
            ok: true,
            data: tracker,
            message: 'Tracker deleted successfully',
            error:null
          });
      }catch (e) {
        console.log(e);
        res.status(500).json({
          ok: false,
          data: null,
          message: 'Internal server error',
          error: e
        });
      }

};

/*
    Description : Considering sharing the live location to a selected list of friends
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.broadcast = async function(req, res) {


};
