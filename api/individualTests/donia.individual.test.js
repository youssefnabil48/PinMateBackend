var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
//require('../models/trackers.model');
var Tracker = mongoose.model('Tracker');

module.exports.test = async function(req, res){
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
}