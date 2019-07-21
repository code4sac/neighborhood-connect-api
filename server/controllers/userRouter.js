const router = require("express").Router();
const express = require("express");

const {
  readUser,
  updateUser,
  createUser,
  deleteUser,
  readAllUsers,
  readOrgUsers
} = require("../model/Users");
const { getAll, getOne, create, update } = require("../model/CRUD");
const table = "test.user";

router.use(express.json());
router.get("/", async (req, res) => {
  try {
    const results = await getAll(table);
    res.status(200).send(results);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const result = await getOne(table, req.params.userId);
    res.status(200).send(result);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.get("/org/:orgId", async (req, res) => {
  try {
    const results = await getAll(table, req.params.orgId);
    res.status(200).send(results);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await create(table, req.body);
    res.status(200).send(result);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.patch("/:userId", async (req, res) => {
  try {
    const result = await update(table, req.params.userId, req.body);
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    return res.status(404).send(err);
  }
});

router.delete("org/users/:user_id", (req, res) => {});

module.exports = router;
