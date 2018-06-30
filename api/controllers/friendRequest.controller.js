var mongoose = require('mongoose');
var FriendRequest = mongoose.model('FriendRequest');
var User = mongoose.model('User');
var Notification = mongoose.model('Notification');
const { validateAll } = require('indicative');



/*
Description : gets the requests of a specific receiver
Takes:
Returns: {
error: "Error object if any",
msg: "Success or failure message"
}
Calling route:
*/
module.exports.getAll = async function(req, res) {
  try {
    var friendRequests = await FriendRequest.getUserRequests(req.params.rcvrId);
    if(friendRequests.length <= 0){
      res.status(200).json({
        ok: true,
        data: friendRequests,
        message: 'No requests found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: friendRequests,
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
    var friendReq = await FriendRequest.getRequestById(req.params.id);
    if(!friendReq){
      res.status(200).json({
        ok: true,
        data: friendReq,
        message: 'Request not found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: friendReq,
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
Description : working but there is a small problem with validation, still under constuction
Takes:
Returns: {
error: "Error object if any",
msg: "Success or failure message"
}
Calling route:
*/
module.exports.create = async function(req, res) {

  /* try {
  const rules = {
  sender_id: 'required',
  receiver_id : 'required'
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
}*/
try {
  var friendRequest = new FriendRequest({
    created_at : req.body.created_at,
    sender_id : req.body.sender_id,
    receiver_id : req.body.receiver_id,
    status: req.body.status
  });
  // var check = module.exports.get(friendRequest);
  // if(check != null){
  //     res.status(200).json({
  //         ok: false,
  //         data: friendRequest,
  //         message: 'Request already exits',
  //         error: null
  //     });
  // }
  // else {
  let newFriendReq = await FriendRequest.create(friendRequest);
  res.status(200).json({
    ok: true,
    data: newFriendReq,
    message: 'Request sent',
    error: null
  });
}
catch (e) {
  console.log(e);
  res.status(500).json({
    ok: false,
    data: null,
    message: 'Internal server error',
    error: e
  });
}

};

module.exports.getSndrRequests = async function (req, res) {
    try {
        var friendRequests = await FriendRequest.getSndrRequests(req.params.userId);
        if(friendRequests.length <= 0){
          res.status(200).json({
            ok: true,
            data: friendRequests,
            message: 'No requests found',
            error:null
          });
          return;
        }
        res.status(200).json({
          ok: true,
          data: friendRequests,
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
      var friendRequests = await FriendRequest.getRcvrRequests(req.params.receiverId);
      var senders = []
      for(let i =0;i<friendRequests.length;i++) {
          const user = await User.getUserById(friendRequests[i].sender_id);
          const u = new User({
            name : user.name,
            id : user.id,
            picture : user.picture
          });
          senders.push(u);
      }

      if(friendRequests.length <= 0){
        res.status(200).json({
          ok: true,
          data: friendRequests,
          message: 'No requests found',
          error:null
        });
        return;
      }
      res.status(200).json({
        ok: true,
        data: friendRequests,
        sender : senders,
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
module.exports.create = async function(req, res) {

    try {
        const rules = {
          sender_id: 'required',
          receiver_id : 'required',
          status: 'boolean'
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
        var friendRequest = new FriendRequest({
           created_at : req.body.created_at,
           sender_id : req.body.sender_id,
           receiver_id : req.body.receiver_id,
           status: req.body.status
        });
        // var check = module.exports.get(friendRequest);
        // if(check != null){
        //     res.status(200).json({
        //         ok: false,
        //         data: friendRequest,
        //         message: 'Request already exits',
        //         error: null
        //     });
        // }
        // else {
            let newFriendReq = await FriendRequest.create(friendRequest);
            res.status(200).json({
                ok: true,
                data: newFriendReq,
                message: 'Request sent',
                error: null
            });
        }
     catch (e) {
        console.log(e);
        res.status(500).json({
            ok: false,
            data: null,
            message: 'Internal server error',
            error: e
        });
    }

};
module.exports.respond = async function(req, res) {
  try {
    var friendReqStatus = req.body.status;
    var friendReq = await FriendRequest.getRequestById(req.body.request_id)
    var receiver_id = req.body.receiver_id;

    var reqs = await FriendRequest.deleteRequest(req.body.request_id);

    if(!reqs) {
      res.status(200).json({
        ok: true,
        data: reqs,
        message: 'Response not sent.',
        error:null
      });
      return;
    }

    const sender = await User.getUserById(friendReq.sender_id);
    const receiver = await User.getUserById(receiver_id);
    if(friendReqStatus)  {
      Notification.sendNotification(sender.notification_token,receiver.name +" accepted your friend request.");
    }
    else {
      Notification.sendNotification(sender.notification_token,receiver.name +" declined your hangout request.");
    }
    res.status(200).json({
      ok: true,
      data: reqs,
      message: 'You responded to the request successfully',
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

Description : working but there is a small problem with validation, still under constuction
Takes:
Returns: {
error: "Error object if any",
msg: "Success or failure message"
}
Calling route:
*/
module.exports.delete = async function(req, res) {

  try{
    var friendRequest = await FriendRequest.deleteRequest(req.params.id);
    if(!friendRequest){
      res.status(200).json({
        ok: true,
        data: friendRequest,
        message: 'Request was not deleted',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: friendRequest,
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
