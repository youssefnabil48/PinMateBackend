var express = require('express');
var router = express.Router();

//importing controllers
var test = require('../controllers/test.controller');

//defining routes

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express app' });
});
router.get('/add/:x/:y',test.add);

//exporting router module
module.exports = router;
