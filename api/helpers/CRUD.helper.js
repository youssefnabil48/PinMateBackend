var mongoose = require('mongoose');

module.exports = {

  getById: async function(model, id) {
    try{
      var obj = await model.findOne({ _id : id }).exec();
      return obj;
    }catch(error){
      console.log(error);
      throw error;
    }
  },

  getByName: async function(model, name){
    try{
      var obj = await model.find({ name: name }).exec();
      return obj;
    }catch(error){
      console.log(error);
      throw error;
    }
  },

  get: async function(model, key, value){
    try{
      var obj = await model.find({key : value}).exec();
      return obj;
    }catch(error){
      console.log(error);
      throw error;
    }
  },

  getAll: async function(model){
    try{
      var obj = await model.find().exec();
      return obj;
    }catch(error){
      console.log(error);
      throw error;
    }
  },

  create: async function(model, newInstance){
    try{
      var obj = await newInstance.save().exec();
      return obj;
    }catch(error){
      console.log(error);
      throw error;
    }
  },

  updateModel: async function(model, id, newValues){
    try{
        var obj = await model.findByIdAndUpdate(id,newValues).exec();
        return obj;
    }catch(error){
      console.log(error);
      throw error;
    }
  },

  deleteModel: async function(model, id){
    try{
        var obj = await model.remove({_id : id}).exec();
        return obj;
    }catch(error){
      console.log(error);
      throw error;
    }
  }
}
