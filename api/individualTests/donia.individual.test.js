var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
//require('../models/trackers.model');
var Tracker = mongoose.model('Place');

module.exports.test = async function(req, res){
try{
  // var dummy = require('mongoose-dummy');
  // const ignoredFields = ['_id', '__v'];
  // var randomObject = dummy(Tracker, {
  //     ignore: ignoredFields,
  //     returnDate: true
  // })


  // var t = new Tracker("5b145989d88c0e05546010da");
  var x = await Tracker.deletePlace("5b145989d88c0e05546010da");
  
   res.send(x);
} catch (e)
{
  console.log(e);
  //throw e;
}
}