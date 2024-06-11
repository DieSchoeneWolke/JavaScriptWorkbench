const express = require('express');
const router = express.Router();
const form = require('../services/form');

router.get('/', async function (req, res, next) {
  try {
    res.json(await form.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting the form `, err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    console.log('Request Body:', req.body);
    res.json(await form.create(req.body));
  } catch (err) {
    console.error(`Error while creating form entry`, err.message);
    next(err);
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    res.json(await form.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating form entry`, err.message);
    next(err);
  }
});

router.delete('/:id', async function (req, res, next) {
  try {
    res.json(await form.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting form entry`, err.message);
    next(err);
  }
});

module.exports = router;