/* require('dotenv').config() */

const config = {
  db: {
    host: "localhost",
    user: "root",
    password: '***REMOVED***',
    database: "form",
    connectTimeout: 60000
  },
  listPerPage: 10,
};
module.exports = config;