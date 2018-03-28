var mongoose = require('mongoose');

var ErrorReportSchema = new mongoose.Schema({
      created_at : {
        type : Date,
        default : Date.now()
      },
      file : {
<<<<<<< HEAD
        type : File,
=======
        type : String,
>>>>>>> cd8a02feb3441771af8f2bfb5f09f634983f4db0
      }
});

mongoose.model('ErrorReport',ErrorReportSchema);
