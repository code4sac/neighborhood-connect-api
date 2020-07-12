// eslint-disable-next-line new-cap
const router = require('express').Router();

// unused?
// const users = require('../model/Users');
const { getOne, create, update} = require('../model/CRUD');
const { getAll } = require('../model/Users');

const table = 'user';

router.get('/', async (req, res) => {
  try {
    const result = await getAll();
    res.json(result);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await create(table, req.body);
    res.status(200).send(result); // should only send confirmation
  } catch (err) {
    return res.status(404).send(err);
  }
});

// is userId found from path or from req body?
router.patch('/:userId', async (req, res) => {
  try {
    const result = await update(table, req.params.userId, req.body);
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    return res.status(404).send(err);
  }
});

// should not send all columns, as pw is still in the db tables
router.get('/:userId', async (req, res) => {
  const {userId} = req.params;
  try {
    const result = await getOne(table, userId);
    res.status(200).send(result.rows);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.get('/orgs/:orgId', async (req, res) => {
  const {orgId} = req.params;
  try {
    const result = await getAll(table, orgId);
    res.status(200).send(result.rows);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.delete('/:user_id', (req, res) => {
  res.status(418).send('Route in development');
});

module.exports = router;
