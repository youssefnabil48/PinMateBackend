var mongoose = require('mongoose');
var FriendRequest = mongoose.model('FriendRequest');
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
