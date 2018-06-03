var mongoose = require('mongoose');
var TestModel = mongoose.model('Test');

module.exports.test = async function(req, res){
  try{
    var x = await TestModel.getById("5b11ee1b8d802217deb1d8c0");
    console.log(x);
    res.send(x);
  }catch(e){
    res.send(e);
  }
}
