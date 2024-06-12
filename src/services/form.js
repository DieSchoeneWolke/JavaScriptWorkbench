const db = require('./db');
const config = require('../db/db_connect');
const helper = require('../db/helper');
const log4js = require('log4js');
log4js.configure('./src/logging/log4js.json');
const log = log4js.getLogger('db');

async function getMultiple(page = 2) {
  log.debug('This is in the getMultiple function');
  const offset = helper.getOffset(page, config.listPerPage);
  const query = `SELECT id, fname, lname, email, department, subject 
                FROM form LIMIT ${offset},${config.listPerPage}`;
  const rows = await db.query(query);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return { data, meta };
}

async function create(form) {
  log.debug('This is in the create function');
  const query = `INSERT INTO form 
                (fname, lname, email, department, subject) 
                VALUES 
                ('${form.fname}', '${form.lname}', '${form.email}', '${form.department}', '${form.subject}')`;
  const result = await db.query(query);

  let message = 'Error in creating form entry';

  if (result.affectedRows) {
    message = 'Form entry created successfully';
  }

  return { message };
}

async function update(id, form) {
  log.debug('This is in the update function');
  const query = `UPDATE form 
                SET fname='${form.fname}', lname='${form.lname}', email='${form.email}', 
                department='${form.department}', subject='${form.subject}' 
                WHERE id=${id}`;
  const result = await db.query(query);

  let message = 'Error in updating form';

  if (result.affectedRows) {
    message = 'Form updated successfully';
  }

  return { message };
}

async function remove(id) {
  log.debug('This is in the remove function');
  const query = `DELETE FROM form WHERE id=${id}`;
  const result = await db.query(query);

  let message = 'Error in deleting form entry';

  if (result.affectedRows) {
    message = 'Form entry deleted successfully';
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
};
