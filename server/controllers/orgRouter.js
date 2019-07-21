const router = require('express').Router();
const {getAll} = require('../model/Organizations');

router.get('/:ordId/priorities', ()=>{});

router.get('/:ordId/users', () => {});

router.get('/:orgId', (req, res) => {
  console.log(req.params, req.params.orgId);

  getAll(req.params.orgId, (err, payload) => {
    if (err) {
      res.send(400);
    } else {
      res.send(payload);
    }
  });
})

module.exports = router;