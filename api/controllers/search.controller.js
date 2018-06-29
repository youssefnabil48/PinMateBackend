var mongoose = require('mongoose');
var Place = mongoose.model('Place');
var User = mongoose.model('User');

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.searchPlaceByName = async function (req, res) {

  try {

    var name = req.body.name;
    //console.log(name);
    let results = await Place.find({
      name: {
        $regex: RegExp(name),
        $options: 'si'
      }
    });
    res.status(200).json({
      ok: true,
      data: results,
      message: 'Results loaded successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
      error: e
    });
  }
}

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.searchPlaceByDescription = async function (req, res) {

  try {
    var description = req.body.description;
    //console.log(description);
    results = await Place.find({
      description: {
        $regex: RegExp(description),
        $options: 'si'
      }
    });

    res.status(200).json({
      ok: true,
      data: results,
      message: 'Results loaded successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
      error: e
    });
  }

}

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
module.exports.searchUsers = async function (req, res) {

  try {

    var name = req.body.name;
    //console.log(name);
    let results = await User.find({
      name: {
        $regex: RegExp(name),
        $options: 'si'
      }
    });
    res.status(200).json({
      ok: true,
      data: results,
      message: 'Results loaded successfully',
      error: null
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      data: null,
      message: 'Internal server error',
      error: e
    });
  }
}
