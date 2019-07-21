// TODO:
// 1. Get all priorities by district

const express = require('express');
const priorityRouter = new express.Router();
const priorityOrganizationRouter = new express.Router();
const priorityDistrictRouter = new express.Router();

const {
    getAllPriorities,
    createPriority,
    getAllPrioritiesByOrganization,
    getPriorityByOrganization,
    updatePriorityByOrganization
} = require('../model/Priorities.js');

// Get all Priorities
priorityRouter.get('/', async (req, res) => {
    try {
        res.status(200).send(await getAllPriorities());
    } catch (err) {
        res.status(500).send();
    }
});

// Priorities based on Organization
priorityOrganizationRouter.post('/:orgId', async (req, res) => {
    try {
        res.status(200).send(await createPriority(req.params.orgId, req.body));
    } catch (err) {
        res.status(400).send();
    }
});

priorityOrganizationRouter.get('/:orgId', async (req, res) => {
    try {
        res.status(200).send(await getAllPrioritiesByOrganization(req.params.orgId));
    } catch (err) {
        res.status(400).send();
    }
});

priorityOrganizationRouter.get('/:orgId/:priorityId', async (req, res) => {
    try {
        res.status(200).send(await getPriorityByOrganization(req.params.orgId, req.params.priorityId));
    } catch (err) {
        res.status(400).send();
    }
});

priorityOrganizationRouter.patch('/:orgId/:priorityId', async (req, res) => {
    try {
        res.status(200).send(await updatePriorityByOrganization(req.params.orgId, req.params.priorityId));
    } catch (err) {
        res.status(400).send();
    }
});

priorityOrganizationRouter.delete('/:orgId/:priorityId', (req, res) => {
    res.status(403).send({ error: 'Delete operation not allowed' });
});

// Priorities based on District
// router.post('/:orgId', async (req, res) => {
//     try {
//         res.status(200).send(await createPriority(req.params.orgId, req.body));
//     } catch (err) {
//         res.status(400).send();
//     }
// });

priorityDistrictRouter.get('/:distId', async (req, res) => {
    // console.log('GETTING PRIORITIES BY DISTRICT');
    try {
        res.status(200).send(await getAllPrioritiesByDistrict(req.params.distId));
    } catch (err) {
        res.status(400).send();
    }
});

// router.get('/:distId/:priorityId', async (req, res) => {
//     try {
//         res.status(200).send(await getPriorityByDistrict(req.params.distId, req.params.priorityId));
//     } catch (err) {
//         res.status(400).send();
//     }
// });

// router.patch('/:distId/:priorityId', async (req, res) => {
//     try {
//         res.status(200).send(await updatePriorityByDistrict(req.params.distId, req.params.priorityId));
//     } catch (err) {
//         res.status(400).send();
//     }
// });

// router.delete('/:distId/:priorityId', (req, res) => {
//     res.status(403).send({ error: 'Delete operation not allowed' });
// });

module.exports = {
    priorityRouter,
    priorityOrganizationRouter,
    priorityDistrictRouter
};