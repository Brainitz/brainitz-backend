var express = require('express');
var router = express.Router();
var Brainitz = require('../lib/queries');
var pgp = require('pg-promise')(/*options*/)
var db = 


/* GET home page. */


router.get('/', function(req, res, next) {
  db.one('SELECT $1 AS value', 123)
    .then(function (data) {
      console.log('DATA:', data.value)
    })
    .catch(function (error) {
      console.log('ERROR:', error)
    })
  // Brainitz.getEverything().then(function(everything) {
  //   console.log("yo buddy");
  //   console.log(everything);
  // })
});

module.exports = router;
