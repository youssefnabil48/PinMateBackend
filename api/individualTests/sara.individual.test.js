var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
// require('../models/trackers.model.js');
var Place = mongoose.model ('Place');

module.exports.test = async function(req, res){
try{
  var dummy = require('mongoose-dummy');
  const ignoredFields = ['_id', 'created_at', '__v'];
  var randomObject = dummy(Place, {
      ignore: ignoredFields,
      returnDate: true
  })


  var t = new Place(randomObject);
  console.log(t);
  await Place.createPlace(t);

  res.send(t);
} catch (e)
{
  console.log(e);
  //throw e;
}
}
