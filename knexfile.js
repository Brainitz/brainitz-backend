require('dotenv').config({silent: true})

module.exports = {

  development: {
    client: 'mysql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  },

  production: {
    client: 'mysql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
