const router = require('express').Router();

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

router.post('/', (req, res) => {
  const result = createAction(req.body);
  if (result === 1) {
    res.status(201).send(result);
  } else {
    res.status(500).send(result);
  }
});

router.get('/:actionId', async (req, res) => {
  const {actionId} = req.params;
  try {
    res.status(200).send(await getActions(actionId));
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/priorities/:priorityId', async (req, res) => {
  const {priorityId} = req.params;
  try {
    res.status(200).send(await getActionsByPriority(priorityId));
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/types/:typeId', async (req, res) => {
  const {typeId} = req.params;
  // console.log(typeId);
  try {
    const result = await getActionsByType(typeId);
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
