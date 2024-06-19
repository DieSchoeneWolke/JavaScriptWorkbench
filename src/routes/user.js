const express = require('express');
const router = express.Router();
const user = require('../services/user');
const log4js = require('log4js');
log4js.configure('./src/logging/log4js.json');
const log = log4js.getLogger('api');

const modifiedUserDataValidate = (req, res, next) => {
  log.debug('This is in the modifiedUserDataValidate variable');
  let inputError = '';
  if (!req.body.fname) {
    inputError = 'Firstname is required!';
  }
  if (!req.body.lname) {
    inputError = 'Lastname is required!';
  }
  if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(req.body.email)) {
    inputError = 'Provide a valid email address!';
  }
  if (!(req.body.department === 'controlling' || req.body.department === 'hr' || req.body.department === 'sales')) {
    inputError = 'Department must be either controlling, hr or sales!';
  } 
  if (inputError) {
    return res.status(400).json({ inputError });
  }

  next();
};

router.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));

router.get('/', async function (req, res, next) {
  try {
    log.debug('This is in the get route');
    res.json(await user.getMultiple(req.query.page));
  } catch (err) {
    log.error(`Error while getting the user `, err.message);
    next(err);
  }
});

router.post('/', modifiedUserDataValidate, async function (req, res, next) {
  try {
    log.debug('This is in the post route');
    log.info('Entry added:', req.body);
    res.json(await user.create(req.body));
  } catch (err) {
    log.error(`Error while creating user entry`, err.message);
    next(err);
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    log.debug('This is in the put route');
    log.info('Entry', req.params.id, 'updated:', req.body);
    res.json(await user.update(req.params.id, req.body));
  } catch (err) {
    log.error(`Error while updating user entry`, err.message);
    next(err);
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    log.debug('This is in the delete route');
    res.json(await user.remove(req.params.id, req.body));
  } catch (err) {
    log.error(`Error while deleting user entry`, err.message);
    next(err);
  }
});

module.exports = router;