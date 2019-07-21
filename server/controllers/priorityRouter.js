const express = require('express');
const router = new express.Router();
const {
    createPriority,
    getAllPriorities,
    getPriority,
    updatePriority
} = require('../model/Priorities.js');

router.post('/', async (req, res) => {
    res.status(200).send(await createPriority(res.query));
});

router.get('/:orgId', async (req, res) => {
    console.log('orgId', req.params.orgId)
    res.status(200).send(await getAllPriorities(req.params.orgId));
});

router.get('/:orgId/:priorityId', async (req, res) => {
    res.status(200).send(await getPriority(req.params.orgId, req.params.priorityId));
});

router.patch('/:orgId/:priorityId', async (req, res) => {
    res.status(200).send(await updatePriority(req.params.orgId, req.params.priorityId));
});

router.delete('/:orgId/:priorityId', (req, res) => {
    res.status(403).send({ error: 'Delete operation not allowed' });
});

module.exports = router;