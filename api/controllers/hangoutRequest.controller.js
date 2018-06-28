var mongoose = require('mongoose');
var HangoutRequest = mongoose.model('HangoutRequest');
var Notification = mongoose.model('Notification');
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
module.exports.create = async function (req, res) {

  try {
      const rules = {
          title: 'required|max:50',
          created_by: 'required',
          description: 'max:300',
          invited: 'required'
         // responded_by : 'required'
        //  user_id: 'required', //responder id
        //  status: 'required' // status
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
      var hangoutReq = new HangoutRequest({
          title: req.body.title,
          date: req.body.date,
          description: req.body.description,
          start_time: req.body.start_time,
          created_by: req.body.created_by,
          place: req.body.place,
          status: req.body.status,
          invited: req.body.invited
      });
      let newHangoutReq = await HangoutRequest.create(hangoutReq);
      var invited = []
      var sender = await User.getUserById(newHangoutReq.created_by);

      for(let i=0;i<newHangoutReq.invited.length;i++){
        const friendId = newHangoutReq.invited[i];
        const user = User.getUserById(friendId);
        Notification.sendNotification(user.notification_token,sender.name +" invited you to " + newHangoutReq.title);
      }
      res.status(200).json({
          ok: true,
          data: newHangoutReq,
          message: 'Hangout request created successfully',
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
module.exports.update = async function (req, res) {

  try {
      var hangoutReqId = req.params.id;
      let newHangoutReq = await HangoutRequest.updateRequest(hangoutReqId,req.body);
      if(!newHangoutReq){
          res.status(200).json({
            ok: true,
            data: newHangoutReq,
            message: 'Request was not updated',
            error:null
          });
          return;
        }
      res.status(200).json({
        ok: true,
        data: newHangoutReq,
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
module.exports.delete = async function (req, res) {

  try{
      var hangoutRequests = await HangoutRequest.deleteRequest(req.params.id);
      if(!hangoutRequests){
        res.status(200).json({
          ok: true,
          data: hangoutRequests,
          message: 'Hangout request is not deleted',
          error: null
        });
        return;
      }
        res.status(200).json({
          ok: true,
          data: hangoutRequests,
          message: 'Request deleted successfully',
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
    Description: Gets the requests of creator
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getSndrRequests = async function (req, res) {
    try {
        var hangoutRequests = await HangoutRequest.getSndrRequests(req.params.userId);
        if(hangoutRequests.length <= 0){
          res.status(200).json({
            ok: true,
            data: hangoutRequests,
            message: 'No requests found',
            error:null
          });
          return;
        }
        res.status(200).json({
          ok: true,
          data: hangoutRequests,
          message: 'Requests loaded successfully',
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
    Description: Gets the requests of invited
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getRcvrRequests = async function (req, res) {
  try {
      var hangoutRequests = await HangoutRequest.getRcvrRequests(req.params.receiverId);
      if(hangoutRequests.length <= 0){
        res.status(200).json({
          ok: true,
          data: hangoutRequests,
          message: 'No requests found',
          error:null
        });
        return;
      }
      res.status(200).json({
        ok: true,
        data: hangoutRequests,
        message: 'Requests loaded successfully',
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
module.exports.get = async function (req, res) {
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
        var hangoutReq = await HangoutRequest.getRequestById(req.params.id);
        if(!hangoutReq){
          res.status(200).json({
            ok: true,
            data: hangoutReq,
            message: 'Request not found',
            error:null
          });
          return;
        }
        res.status(200).json({
          ok: true,
          data: hangoutReq,
          message: 'Request loaded successfully',
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
module.exports.respond = async function(req,res){

  //Under construction still, not final yet
  try {
    var hangoutReqStatus = req.params.status;
    var hangoutReq = await HangoutRequest.getRcvrRequests(req.params.receiverId);
      if(hangoutReqStatus == true){
        res.status(200).json({
          ok: true,
          data: hangoutReq,
          message: 'You accepted the request successfully',
          error:null
        });
      }

      else if(hangoutReqStatus == false){
        res.status(200).json({
          ok: true,
          data: hangoutReq,
          message: 'You rejected the request successfully',
          error:null
        });

      }

  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
      error: e
    });
}
}
