var mongoose = require('mongoose');
var Place = mongoose.model('Place');
var Post = mongoose.model('Post');
var Event = mongoose.model('Event');
var Review = mongoose.model('Review');

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getAll = async function(req, res) {
  try{
    var places = await Place.getAll();
    if (!places) {
      res.json({
        msg: "no object found"
      });
      return;
    }
    res.json({
      msg: "success",
      places: places
    });
  }catch(error){
    res.status(500).json({ error: error.toString() });
  }
};


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getById = async function(req, res) {
  try{
    var places = await Place.getById(req.params.id);
    if (!places) {
      res.json({
        msg: "no object found"
      });
      return;
    }
    res.json({
      msg: "success",
      places: places
    });
  }catch(error){
    res.status(500).json({ error: error.toString() });
  }
};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.getByName = async function(req, res) {
  try{
    var places = await Place.getByName(req.params.name);
    if (!places) {
      res.json({
        msg: "no object found"
      });
      return;
    }
    res.json({
      msg: "success",
      places: places
    });
  }catch(error){
    res.status(500).json({ error: error.toString() });
  }
};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.create = async function(req, res) {

};


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.update = async function(req, res) {

};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.delete = async function(req, res) {
  try{
    var places = await Place.deletePlace(req.params.id);
    console.log(places);
    if (!places) {
      res.json({
        msg: "no object found"
      });
      return;
    }
    res.json({
      msg: "success",
      places: places
    });
  }catch(error){
    res.status(500).json({ error: error.toString() });
  }
};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.favoritePlace = function(req, res) {

};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.unfavoritePlace = function(req, res) {

};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.addPost = async function(req, res) {

   try {
        console.log(req.body);
        var placeID = req.body.place_id;
        var place =await Place.getById(placeID);
        var p = new Post({
            content: req.body.content,
            created_at: req.body.created_at,
            user : req.body.user,
            likes : req.body.likes,
        });
        var query = await Place.addPost(place,p);
        console.log(query);
        if (!query) {
          res.json({
            msg: "object not inserted"
          });
          return;
        }
        res.json({
          msg: "success",
          query: query
        });
      }catch(error){
        res.status(500).json({ error: error.toString() });
      }


};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.deletePost = function(req, res) {

};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.addEvent = function(req, res) {

};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.deleteEvent = function(req, res) {

};


/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.updateEvent = function(req, res) {

};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.addReview = function(req, res) {

};

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.deleteReview = function(req, res) {

};
