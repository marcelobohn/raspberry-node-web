var express = require('express');
var rpi = require('./../raspberry/led.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  rpi.changeLed(1);
  res.render('on', { title: 'Raspberry Pi Server' });
});

module.exports = router;
