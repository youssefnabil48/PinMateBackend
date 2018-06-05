var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');
var Tracker = mongoose.model ('Tracker');

module.exports.test = async function(req, res){
  res.send('donia');
try{
  var dummy = require('mongoose-dummy');
  const ignoredFields = ['_id', 'created_at', '__v'];
  var randomObject = dummy(Tracker, {
      ignore: ignoredFields,
      returnDate: true
  })
  var t = new Tracker(randomObject);
  var x = await Tracker.create(t);
  
  res.send(t);
} catch (e)
{
  console.log(e);
  throw e;
}
}