var knex = require('../db/knex');

module.exports = {

  getEverything: function() {
    return knex.raw(
      `SELECT datname FROM brainitz-dev1
        WHERE datistemplate = false;`);
  }









}
