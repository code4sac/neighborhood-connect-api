const router = require('express').Router();
const {getTypes, getType} = require('../model/Types');

router.get('/:typeId', (req, res) => {
  getType(req.params.orgId, (err, payload) => {
    if (err) {
      res.send(400);
    } else {
      res.send(payload);
    }
  });
});

router.get('/', (req, res) => {
  getTypes((err, payload) => {
    if (err) {
      res.send(400);
    } else {
      res.send(payload);
    }
  });
});

module.exports = router;
