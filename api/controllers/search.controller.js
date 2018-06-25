var mongoose = require('mongoose');
var Place = mongoose.model('Place');
var User = mongoose.model('User');
//const querystring = require('querystring');

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.generalSearch = async function(req,res){

    //Case sensitive

    try{
       // var q = JSON.stringify(req.body.description);
       var q = req.body.description;
      
        res.status(200).json({
          ok: true,
          data: results,
          message: 'Results loaded successfully',
          error: null
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



}
