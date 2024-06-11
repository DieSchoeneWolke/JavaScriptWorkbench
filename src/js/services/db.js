const mysql = require('mysql2/promise');
const config = require('../db/db_connect');

async function query(sql, params) {
  try {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);
    await connection.end();

    return results;
  } catch (error) {
    console.error('Error executing SQL query:', error);
    throw new Error('An error occurred while executing the SQL query');
  }
}

module.exports = {
  query
}