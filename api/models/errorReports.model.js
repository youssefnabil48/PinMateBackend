var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');

var ErrorReportSchema = new mongoose.Schema({
      created_at : {
        type : Date,
        default : Date.now()
      },
      file : {
        type : String,
      },
      related_user : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
      }
});

/*
    Description
    Takes:
    Returns: {
        error: "Error object if any",
        msg: "Success or failure message"
    }
    Calling route:
*/
ErrorReportSchema.statics.getReportById = function(id){
  try {
    return CRUDHelper.getById(this, id);
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
ErrorReportSchema.statics.getReportByUser = function(){

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
ErrorReportSchema.statics.getAll = function(){

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
ErrorReportSchema.statics.createReport = function(){

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
ErrorReportSchema.statics.deleteReport = function(){

}

mongoose.model('ErrorReport',ErrorReportSchema);
