var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
// require('../models/trackers.model.js');
var Place = mongoose.model ('Place');
var User = mongoose.model ('User');
var HangoutRequest = mongoose.model ('HangoutRequest');

module.exports.test = async function(req, res){
try{
  var dummy = require('mongoose-dummy');
  const ignoredFields = ['_id', '__v'];
  var randomObject = dummy(HangoutRequest, {
      ignore: ignoredFields,
      returnDate: true
  });
  var post = new HangoutRequest(randomObject);
  console.log(post);
  res.status(200).json(post);
return post;
} catch (e)
{
  console.log(e);
  //throw e;
}
}
