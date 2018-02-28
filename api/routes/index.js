var express = require('express');
var router = express.Router();

//importing controllers
var calculator = require('../controllers/calculationCTRL');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express app' });
});

router.get('/add/:x/:y',calculator.add);

module.exports = router;
