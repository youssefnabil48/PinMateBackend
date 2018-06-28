var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
// require('../models/trackers.model.js');
var Place = mongoose.model ('Place');
var User = mongoose.model ('User');
var HangoutRequest = mongoose.model ('HangoutRequest');
var Notification = mongoose.model ('Notification');


module.exports.test = async function(req, res){
try{
  // var dummy = require('mongoose-dummy');
  // const ignoredFields = ['_id', '__v'];
  // var randomObject = dummy(HangoutRequest, {
  //     ignore: ignoredFields,
  //     returnDate: true
  // });
  // var post = new HangoutRequest(randomObject);
  // console.log(post);
  await Notification.sendNotification("c1GoJE6pMZQ:APA91bFu6hF--XpBGfkF-hWqPftUzkc5t1KxRvVpP3JdhxlH61UqMpVT9FQ7kaMVi9UnY8m86Dbhri6NuoHunsDkjOiqLA27YnPNazdYM5r1e4UMOHzT4Q1_TL_nOeEdyDZx0yfOQ9br3W9gEzMAsVL9mbxSHkpo5Q","heey");
  res.status(200).json("sent");
return post;
} catch (e)
{
  console.log(e);
  //throw e;
}
}
