var mongoose = require('mongoose');
var CRUDHelper = require('../helpers/CRUD.helper');

const testSchema = new mongoose.Schema({
    name: {
        type: String
    },
    content: {
        type: String
    }
});

testSchema.statics.getById = async function (id){
  try {
    return CRUDHelper.getById(this, id);
  } catch (e) {
    console.log(e);
    throw e;
  }
}

testSchema.statics.getAll = async function (){
  try {
      return CRUDHelper.getAll(this);
  } catch (e) {
      console.log(e);
      throw e;
  }
}

mongoose.model('Test', testSchema);
