var mongoose = require('mongoose');
var User = mongoose.model('User');
var Place = mongoose.model('Place');


module.exports.recommendPlace = async function(req,res){
    try {
        let user = await User.getUserById(req.body.id);
        let rankedPlacesIds = {};
        let rankedPlaces = [];
        for(let i = 0; i<user.friends.length; i++){
            let userFriend = await User.getUserById(user.friends[i]);
            for(let j = 0; j<userFriend.favorite_places.length; j++){
                if(rankedPlacesIds.hasOwnProperty(userFriend.favorite_places[j])){
                    rankedPlacesIds[userFriend.favorite_places[j]] = rankedPlacesIds[userFriend.favorite_places[j]] + 1;
                }else {
                    rankedPlacesIds[userFriend.favorite_places[j]] = 1;
                }
            }
        }
        var sortedPlacesIds = sortProperties(rankedPlacesIds);
        var places = await Place.find({
            $or:[
                {_id: mongoose.Types.ObjectId(sortedPlacesIds[0])},
                {_id: mongoose.Types.ObjectId(sortedPlacesIds[1])},
                {_id: mongoose.Types.ObjectId(sortedPlacesIds[2])}
              ]
        });
        var result;
        for(let i = 0; i<3; i++){
            result = places.filter(function( obj ) {
                return obj._id == sortedPlacesIds[i];
            });
            rankedPlaces.push(result[0]);
        }
        res.status(200).json({
            ok: true,
            data: rankedPlaces,
            message: 'Recommended places',
            error: null
          });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            data: null,
            message: 'Internal server error',
            error: error
          });
    }
    
}

//this should sort keys but return the objects 
//after modifications it return the keys only sorted according to the values
function sortProperties(obj)
{
  // convert object into array
	var sortable=[];
	for(var key in obj)
        if(obj.hasOwnProperty(key))
            //sortable.push([key, obj[key]]); // each item is an array in format [key, value]
			sortable.push(key); //modified line
	
	// sort items by value
	sortable.sort(function(a, b)
	{
	  return b[1]-a[1]; // compare numbers
	});
	return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}
