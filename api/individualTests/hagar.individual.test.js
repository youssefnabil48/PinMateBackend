var mongoose = require('mongoose');
var TestModel = mongoose.model('Test');
var Place = mongoose.model('Place');
var User = mongoose.model('User');
var CRUDHelper = require('../helpers/CRUD.helper');

module.exports.test =async function(req, res){
  
var dummy = require('mongoose-dummy');
const ignoredFields = ['_id', 'created_at', '__v'];
var randomObject = dummy(User, {
    ignore: ignoredFields,
    returnDate: true
});
var user = new User(randomObject);
await user.save();
res.send('ok');
}
