
var mongoose = require('mongoose');
var Place = mongoose.model('Place');



module.exports.test = async function(req, res){

  try {
    var dummy = require('mongoose-dummy');
    const ignoredFields = ['_id', 'created_at', '__v'];
    var randomObject = dummy(Place, {
        ignore: ignoredFields,
        returnDate: true
    })
    var p = new Place(randomObject);
    var x = await Place.create(p);

    res.send(x);
  }
  catch (e) {
    console.log(e);
    throw e;
  }

}

//to insert model
// var dummy = require('mongoose-dummy');
// const ignoredFields = ['_id', 'created_at', '__v'];
// var randomObject = dummy(Place, {
//     ignore: ignoredFields,
//     returnDate: true
// })
// console.log(randomObject);
// var p = new Place(randomObject);
// await p.save();
// res.send(p);
