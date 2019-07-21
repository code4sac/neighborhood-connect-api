const router = require("express").Router();
const {
  readUser,
  updateUser,
  createUser,
  deleteUser,
  readAllUsers
} = require("../model/Users");

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
    const result = await readUser(req.params.userId);
    res.status(200).send(result);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.post("/:user_id", async (req, res) => {
  try {
    const result = await createUser(req.params);
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
