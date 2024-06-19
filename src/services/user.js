const db = require('./db_user.js');
const helper = require('../db/helper');
const log4js = require('log4js');
log4js.configure('./src/logging/log4js.json');
const log = log4js.getLogger('db');

async function getMultiple() {
  log.debug('This is in the getMultiple function');
  const query = `SELECT id, fname, lname, email, department FROM user`;
  const rows = await db.query(query);
  const data = helper.emptyOrRows(rows);

  return { data };
}

async function create(user) {
  log.debug('This is in the create function');
  const query = `INSERT INTO user 
                (fname, lname, email, department) 
                VALUES 
                ('${user.fname}', '${user.lname}', '${user.email}', '${user.department}')`;
  const result = await db.query(query);

  let message = 'Error in creating user entry';

  if (result.affectedRows) {
    message = 'user entry created successfully';
  }

  return { message };
}

async function update(id, user) {
  log.debug('This is in the update function');
  const query = `UPDATE user 
                SET fname='${user.fname}', lname='${user.lname}', email='${user.email}', 
                department='${user.department}'
                WHERE id=${id}`;
  const result = await db.query(query);

  let message = 'Error in updating user';

  if (result.affectedRows) {
    message = 'user updated successfully';
  }

  return { message };
}

async function remove(id) {
  log.debug('This is in the remove function');
  const query = `DELETE FROM user WHERE id=${id}`;
  const result = await db.query(query);

  let message = 'Error in deleting user entry';

  if (result.affectedRows) {
    message = 'user entry deleted successfully';
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
};
