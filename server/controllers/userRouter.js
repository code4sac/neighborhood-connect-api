const express = require("express");
const router = express.Router();
const {
  readUser,
  updateUser,
  createUser,
  deleteUser,
  readAllUsers
} = require("../model/Users");

router.use(express.json());
router.get("/", async (req, res) => {
  try {
    const results = await readAllUsers();
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get("/:user_id", async (req, res) => {
  try {
    const result = await readUser(req.params.user_id);
    res.status(200).send(result);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await createUser(req.body);
    res.status(200).send(result);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.patch("/:user_id", async (req, res) => {
  try {
    const result = await updateUser(req.params);
    res.status(201).send(result);
  } catch (err) {
    return res.status(404).send(err);
  }
});

// router.update("/org/users/:user_id", (req, res) => {
//   updateUser(req.params.userId, (req, res) => {
//     if (err) {
//       res.send(400);
//     } else {
//       res.send(payload);
//     }
//   });
// });

router.delete("org/users/:user_id", (req, res) => {});

module.exports = router;
