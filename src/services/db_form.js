const mysql = require('mysql2/promise');
const config = require('../db/db_form.js');
const log4js = require('log4js');
log4js.configure('./src/logging/log4js.json');
const log = log4js.getLogger('db');

async function query(sql, params) {
  try {
    log.debug('This is in the query function');
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);
    await connection.end();

    return results;
  } catch (error) {
    log.error('Error executing SQL query:', error);
    throw new Error('An error occurred while executing the SQL query');
  }
}

module.exports = {
  query
}