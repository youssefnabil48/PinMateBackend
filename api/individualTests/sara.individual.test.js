
var mongoose = require('mongoose');
var Place = mongoose.model('Place');
var Post = mongoose.model('Post');


module.exports.test = async function(req, res){

  try {
    var dummy = require('mongoose-dummy');
    const ignoredFields = ['_id', 'created_at', '__v'];
    var randomObject = dummy(Post, {
        ignore: ignoredFields,
        returnDate: true
    })

    var post = new Post(randomObject);
        console.log(randomObject);
    var p =await Place.getById(req.params.id);
    await Place.addPost(p,post);
    // await p.save();
     res.send(p);
  }
  catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }

}

//
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
