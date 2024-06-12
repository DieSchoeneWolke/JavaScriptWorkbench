const express = require('express');
const router = express.Router();
const form = require('../services/form');
const log4js = require('log4js');
log4js.configure('./src/logging/log4js.json');
const log = log4js.getLogger('api');
// TODO: Validate user input with log4js
const { userDataValidate } = require('../validations/user.validation');

router.use(log4js.connectLogger(log4js.getLogger('http'), { level: 'auto' }));

router.get('/', async function (req, res, next) {
  try {
    log.debug('This is in the get route');
    res.json(await form.getMultiple(req.query.page));
  } catch (err) {
    log.error(`Error while getting the form `, err.message);
    next(err);
  }
});

router.post('/', userDataValidate, async function (req, res, next) {
  try {
    log.debug('This is in the post route');
    log.info('Entry added:', req.body);
    res.json(await form.create(req.body));
  } catch (err) {
    log.error(`Error while creating form entry`, err.message);
    next(err);
  }
});

router.put('/:id', userDataValidate, async function (req, res, next) {
  try {
    log.debug('This is in the put route');
    log.info('Entry', req.params.id, 'updated:', req.body);
    res.json(await form.update(req.params.id, req.body));
  } catch (err) {
    log.error(`Error while updating form entry`, err.message);
    next(err);
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    log.debug('This is in the delete route');
    res.json(await form.remove(req.params.id, req.body));
  } catch (err) {
    log.error(`Error while deleting form entry`, err.message);
    next(err);
  }
});

module.exports = router;