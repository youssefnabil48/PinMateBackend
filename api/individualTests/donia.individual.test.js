var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
var Request = mongoose.model('FriendRequest');

module.exports.test = async function(req, res){
  try{
    var dummy = require('mongoose-dummy');
    const ignoredFields = ['_id', 'created_at', '__v'];
    var randomObject = dummy(Request, {
        ignore: ignoredFields,
        returnDate: true
    });
    var r = new Request(randomObject);
    console.log(r);
    var x = await Request.createPlace(r);
    
    // res.send(r);
    res.status(200).send('donia');
  } catch (e)
  {
    console.log(e);
    throw e;
  }
}