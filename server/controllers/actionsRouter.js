const express = require('express');
const router = new express.Router();

const {
  getActions,
  getActionsByPriority,
  getActionsByType,
  createAction,
} = require('../model/Actions');

router.get('/', async (req, res) => {
  try {
    const results = await getActions();
    res.status(200).send(results.rows);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post('/', async (req, res) => {
  const result = await createAction(req.body);
  if (result === 1) {
    res.status(201).send(result);
  } else {
    res.status(500).send(result);
  }
});

router.get('/:actionId', async (req, res) => {
  const {actionId} = req.params;
  try {
    const {rows} = await getActions(actionId);
    res.status(200).send(rows);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/priorities/:priorityId', async (req, res) => {
  const {priorityId} = req.params;
  try {
    const {rows} = await getActionsByPriority(priorityId);
    res.status(200).send(rows);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/types/:typeId', async (req, res) => {
  const {typeId} = req.params;
  try {
    const {rows} = await getActionsByType(typeId);
    res.status(200).send(rows);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
