const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const {getOrg, getOrgUsers, postOrg} = require('../model/Organizations');

// DRY consider refactoring
router.get('/', async (req, res) => {
  try {
    const result = await getOrg(null);
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get('/:orgId', async (req, res) => {
  try {
    res.status(200).send(await getOrg(req.params.orgId));
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.get('/:orgId/users', async (req, res) => {
  try {
    res.status(200).send(await getOrgUsers());
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    await postOrg(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.get('/:orgId/users/:userId', async (req, res) => {
  try {
    res.status(200).send(await getOrgUsers(req.params.orgId));
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
