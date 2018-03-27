var mongoose = require('mongoose');

var ErrorReportSchema = new mongoose.Schema({
      created_at : {
        type : Date,
        default : Date.now()
      },
      file : {
        type : File,
        
      }
});

mongoose.model('ErrorReport',ErrorReportSchema);
