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
    let places = await Place.getAll();
    res.status(200).json({
      ok: true,
      data: places,
      message: 'user created successfully',
      error: null
    });
  }catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
    if(places.lenght <= 0){
      res.status(200).json({
        ok: true,
        data: places,
        message: 'no places found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: places,
      message: 'places loaded successfully',
      error:null
    });
  }catch(e){
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
    if(places.lenght <= 0){
      res.status(200).json({
        ok: true,
        data: places,
        message: 'no places found',
        error:null
      });
      return;
    }
    res.status(200).json({
      ok: true,
      data: places,
      message: 'places loaded successfully',
      error:null
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
  try {
    var place = new Place({
      name : req.body.name,
      icon : req.body.icon,
      description: req.body.description,
      longitude : req.body.longitude,
      latitude : req.body.latitude,
      picture : req.body.picture,
      gallery : req.body.gallery,
      mobile_number : req.body.mobile_number,
      events : req.body.events,
      posts : req.body.posts,
      reviews : req.body.reviews,
      story_id : req.body.story_id,
      managed_by : req.body.managed_by
    });
    let newPlace = await Place.create(place);
    res.status(200).json({
      ok: true,
      data: newPlace,
      message: 'user created successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
module.exports.update = async function(req, res) {
  try {
      var placeId = req.params.id;
      // var place = await Place.getById(placeId);
      // console.log(place);
      let newPlace = await Place.updatePlace(placeId,req.body);
      res.status(200).json({
        ok: true,
        data: newPlace,
        message: 'place updated successfully',
        error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
module.exports.delete = async function(req, res) {
  try{
    var places = await Place.deletePlace(req.params.id);
      if(!places){
        res.status(200).json({
          ok: true,
          data: places,
          message: 'place not deleted',
          error:null
        });
        return;
      }
      res.status(200).json({
        ok: true,
        data: places,
        message: 'place deleted successfully',
        error:null
      });
  }catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
module.exports.favoritePlace = async function(req, res) {
  try {
    let newFavorite = await Place.favoritePlace(req.body.user_id,req.body.place_id);
    res.status(200).json({
      ok: true,
      data: newFavorite,
      message: 'favorite created successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
module.exports.unfavoritePlace = async function(req, res) {
  try {
    let removeFavorite = await Place.unfavoritePlace(req.body.user_id,req.body.place_id);
    res.status(200).json({
      ok: true,
      data: removeFavorite,
      message: 'favorite removed successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
module.exports.addPost = async function(req, res) {

   try {
        var placeID = req.body.place_id;
        var place =await Place.getById(placeID);
        var p = new Post({
            content: req.body.content,
            created_at: req.body.created_at,
            user : req.body.user,
            likes : req.body.likes,
        });
        var query = await Place.addPost(place,p);
        if (!query) {
          res.status(200).json({
            ok: true,
            data: query,
            message: 'post not created',
            error: null
          });
          return;
        }
        res.status(200).json({
          ok: true,
          data: query,
          message: 'post created successfully',
          error: null
        });
      }catch (e) {
        console.log(e);
        res.status(500).json({
          ok: false,
          data: null,
          message: 'internal server error',
          error: e
        });
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
module.exports.deletePost = async function(req, res) {
  try {

       var placeID = req.body.place_id;
       var place =await Place.getById(placeID);
       var postId = req.params.postId;
       var query = await Place.deletePost(place,postId);
       if (!query) {
         res.status(200).json({
           ok: true,
           data: query,
           message: 'post not deleted',
           error: null
         });
         return;
       }
       res.status(200).json({
         ok: true,
         data: query,
         message: 'post deleted successfully',
         error: null
       });
     }catch (e) {
       console.log(e);
       res.status(500).json({
         ok: false,
         data: null,
         message: 'internal server error',
         error: e
       });
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
module.exports.addEvent = async function(req, res) {

    try {
          var placeID = req.body.place_id;
          var place =await Place.getById(placeID);
          var e = new Event({
              description: req.body.description,
              name: req.body.name,
              start_date : req.body.start_date,
              end_date : req.body.end_date,
              posts : req.body.posts,
          });
          var query = await Place.addEvent(place,e);
          if (!query) {
            res.status(200).json({
             ok: true,
             data: query,
             message: 'event not added',
             error: null
           });
           return;
         }
         res.status(200).json({
           ok: true,
           data: query,
           message: 'event added successfully',
           error: null
         });
        }catch (e) {
          console.log(e);
          res.status(500).json({
            ok: false,
            data: null,
            message: 'internal server error',
            error: e
          });
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
module.exports.deleteEvent = async function(req, res) {
  try {
       var placeID = req.body.place_id;
       var place =await Place.getById(placeID);
       var eventId = req.params.eventId;
       var query = await Place.deleteEvent(place,eventId);
       if (!query)  {
         res.status(200).json({
          ok: true,
          data: query,
          message: 'event not deleted',
          error: null
        });
        return;
      }
      res.status(200).json({
        ok: true,
        data: query,
        message: 'event deleted successfully',
        error: null
      });
     }catch(e){
       console.log(e);
       res.status(500).json({
         ok: false,
         data: null,
         message: 'internal server error',
         error: e
       });
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
module.exports.updateEvent = async function(req, res) {
  try {
      var placeId = req.params.placeid;
      var place = await Place.getById(placeId);
     console.log(placeId);

      let newPlace = await Place.updateEvent(place,req.params.id,req.body);
      res.status(200).json({
        ok: true,
        data: newPlace,
        message: 'event updated successfully',
        error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
module.exports.addReview = async function(req, res) {
  try {
    var placeID = req.body.place_id;
    var place =await Place.getById(placeID);
    console.log(place);
    var r = new Review({
      content : req.body.content,
      rating : req.body.rating,
      created_at : req.body.created_at,
      user_id : req.body.user_id
    });
    let newReview = await Place.addReview(place,r);
    res.status(200).json({
      ok: true,
      data: newReview,
      message: 'review created successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'internal server error',
      error: e
    });
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
module.exports.deleteReview = async function(req, res) {
    try {
      var placeId = req.body.place_id;
      var place = Place.getById(placeId);
      let rmReview = await Place.deleteReview(place,req.body.review_id);
      res.status(200).json({
        ok: true,
        data: rmReview,
        message: 'review removed successfully',
        error: null
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        ok: false,
        data: null,
        message: 'internal server error',
        error: e
      });
    }
};
