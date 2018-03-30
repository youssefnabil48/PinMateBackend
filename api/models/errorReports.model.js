var mongoose = require('mongoose');

var ErrorReportSchema = new mongoose.Schema({
      created_at : {
        type : Date,
        default : Date.now()
      },
      file : {
        type : String,
      },
      related_user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
      }
});

mongoose.model('ErrorReport',ErrorReportSchema);
