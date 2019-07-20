const router = require('express').Router();
const db = require('../model/db');

router.get('/:orgId', (req, res) => {
  console.log(req.params, req.params.orgId)
  db.query(`select * from test.organization where id = ${req.params.orgId}`, (err, payload) => {
    if (err) {
      res.send(404);
      console.log(err);
    } else {
      res.send(payload);
    }
  })
})

module.exports = router;