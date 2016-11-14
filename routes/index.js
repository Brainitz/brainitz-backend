var promise = require('bluebird');

var express = require('express');
var router = express.Router();
var Brainitz = require('../lib/queries');
var knex = require('../db/knex');


var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var db = pgp(process.env.DATABASE_URL);


/* GET home page. */

router.get('/', function(req, res, next) {
  // db.one('SELECT $1 AS value', 123)
  db.any(`select * from INFORMATION_SCHEMA.COLUMNS`)
    .then(function(data) {
      res.json(data);
      console.log(data);
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
