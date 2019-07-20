const router = require('express').Router();
const {getAll} = require('../model/Organizations');

router.get('/:ordId/priorities', ()=>{});

router.get('/:ordId/users', () => {});

router.get('/:orgId', (req, res) => {
  console.log(req.params, req.params.orgId);

  res.send(getAll(req.params.orgId));
})

module.exports = router;