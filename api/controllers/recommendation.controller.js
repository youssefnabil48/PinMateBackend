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
        
        res.status(200).json({
            ok: true,
            data: rankedPlacesIds,
            message: 'Recommended places',
            error: null
          });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            data: null,
            message: 'Internal server error',
            error: e
          });
    }
    
}
