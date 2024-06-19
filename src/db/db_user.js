/* require('dotenv').config({path:'./.env'}) */

const config = {
  db: {
    host: 'localhost',
    user: 'root',
    password: '***REMOVED***',
    database: 'user',
    connectTimeout: 60000
  },
};

module.exports = config;