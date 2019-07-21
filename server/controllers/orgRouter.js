const router = require("express").Router();
const { getOrg, getOrgUsers } = require("../model/Organizations");

// DRY consider refactoring
router.get("/", (req, res) => {
  getOrg(null, (err, payload) => {
    console.log(err, payload);
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(payload);
    }
  });
});

router.get("/:orgId", (req, res) => {
  getOrg(req.params.orgId, (err, payload) => {
    console.log(err, payload);
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(payload);
    }
  });
});

router.get("/:orgId/users", (req, res) => {
  getOrgUsers(null, (err, payload) => {
    console.log(err, payload);
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(payload);
    }
  });
});

router.get("/:orgId/users/:userId", (req, res) => {
  getOrgUsers(req.params.orgId, (err, payload) => {
    console.log(err, payload);
    if (err) {
      res.sendStatus(400);
    } else {
      res.send(payload);
    }
  });
});

module.exports = router;
