var knex = require('../db/knex');

module.exports = {

  getEverything: function() {
    return knex.raw(
      `select TABLE_NAME from INFORMATION_SCHEMA.TABLES;`
    );
  }









}
