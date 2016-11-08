var express = require('express');
var router = express.Router();
var Brainitz = require('../lib/queries');


/* GET home page. */
router.get('/', function(req, res, next) {
  Brainitz.getEverything().then(function(everything) {
    console.log("yo buddy");
    res.json(everything);
  })
});

module.exports = router;
