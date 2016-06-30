var express = require('express');
var rpi = require('../raspberry/led.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/on', function(req, res, next) {
  rpi.changeLed(1);
  res.render('text');
});
router.get('/off', function(req, res, next) {
  rpi.changeLed(1);
  res.render('text');
});


module.exports = router;
