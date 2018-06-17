var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');

var HangoutRequestSchema = new mongoose.Schema({
  date : {
    type : Date,
    default : Date.now()
  },
  description : {
    type : String,
    required : false
  },
  start_time : {
    type : Date,
    default : Date.now()
  },
  title : {
    type : String,
    required : true
  },

  created_by : {
    type : mongoose.Schema.ObjectId,
    ref : "User",
    required : true
  },

  place : {
    type : mongoose.Schema.ObjectId,
    ref : "Place"
  },

  status : {
    type : Boolean,
    //required: true
  },

  invited : [{
      type : mongoose.Schema.ObjectId,
      ref : "User",
      required: true
  }]

});

//helper functions
/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
HangoutRequestSchema.statics.createRequest = async function(newHangoutReq){

    try {
        return await CRUDHelper.create(this, newHangoutReq);
      } catch (e) {
        console.log(e);
        throw e;
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
HangoutRequestSchema.statics.updateRequest = async function(hangoutReqId,updates){

    try {
        return await CRUDHelper.updateModel(this,hangoutReqId,updates);
    }
     catch (e) {
      console.log(e);
      throw e;
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
HangoutRequestSchema.statics.deleteRequest = async function(id){

    try {
        return await CRUDHelper.deleteModel(this, id);
      } catch (e) {
        console.log(e);
        throw e;
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
HangoutRequestSchema.statics.getRequestById = async function(id){
    try {
      return CRUDHelper.getById(this, id);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  /*
    Description :  Gets the requests of creator
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
HangoutRequestSchema.statics.getSndrRequests = async function(userId){

    try {
        //return CRUDHelper.get(this,created_by,user_id);
        var hangoutReqs = await this.find({
            created_by : userId });
            return hangoutReqs;
   } 
    catch (e){
       console.log(e);
       throw e;
   }
}

 /*
    Description :  Gets the requests of invited
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
HangoutRequestSchema.statics.getRcvrRequests = async function(receiverId){

    try {
        //return CRUDHelper.get(this,created_by,user_id);
        var hangoutReqs = await this.find({
            invited : receiverId });
            return hangoutReqs;
   } 
    catch (e){
       console.log(e);
       throw e;
   }
}

//     try {
//         //return CRUDHelper.get(this,created_by,user_id);
//         var hangoutReqs = await this.find({
//             responded_by : receiverId });
//             return hangoutReqs;
//    } 
//     catch (e){
//        console.log(e);
//        throw e;
//    }
// }

mongoose.model('HangoutRequest',HangoutRequestSchema);
