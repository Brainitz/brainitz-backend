var promise = require('bluebird');
var express = require('express');
var router = express.Router();
var Brainitz = require('../lib/queries');
var knex = require('../db/knex');
var mysql = require('mysql');
var db = require('../db/db');

router.get('/', function(req, res) {
  db.connect(function(err) {
    console.log('establishing connection');
    if (err) throw err;
  });
  knex.raw('select * from INFORMATION_SCHEMA.COLUMNS;').then(function(err, rows){
    if(err) {
      db.end();
      console.error(err);
      return;
    } else {
      console.log(rows);
      res.json(rows);
    }
    db.end();
  });
});

module.exports = router;
