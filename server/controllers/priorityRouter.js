const express = require('express');
const priorityRouter = new express.Router();

const {
  getAll,
  getAllPriorities,
  createPriority,
  getAllPrioritiesByOrganization,
  getPriorityByOrganization,
  updatePriorityByOrganization,
  getActionsByPriority,
  getAllPrioritiesByDistrict,
  getAllPrioritiesByType,
  updateRank,
} = require('../model/Priorities.js');

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  //console.log("checking isUserAuthed  object? ", req.user);
  if (req.user) {
      const emails = req.user.emails;
      const u = emails.find(email => email.value === "kevinfries916@gmail.com" && email.verified);
      console.log(u);
      if (u) {
        next();
      }
  } else {
    res.status(403).send(req.user + ', You must login! <a href="/auth/google">Sign in with Google</a>');
  }
}

// Get all Priorities
priorityRouter.get('/', isUserAuthenticated, async (req, res) => {
  try {
    const result = await getAll();
    res.json(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Post a new priority
priorityRouter.post('/', isUserAuthenticated, async (req, res) => {
  try {
    const result = await createPriority(req.body);
    res.status(200).send();
    // p;
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update a priority rank
priorityRouter.post('/updateRank', async (req, res) => {
  try {
    await updateRank(req.body);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
// Get actions for a priority
priorityRouter.get('/:priorityId/actions', async (req, res) => {
  const {priorityId} = req.params;
  try {
    const result = await getActionsByPriority(priorityId);
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get priorities by organization
priorityRouter.get('/orgs/:orgId', async (req, res) => {
  const {orgId} = req.params;
  try {
    const result = await getAllPrioritiesByOrganization(orgId);
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get priorities by district
priorityRouter.get('/district/:district', async (req, res) => {
  const {district} = req.params;
  try {
    const result = await getAllPrioritiesByDistrict(district);
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(400).send(err);
  }
});
// Get priorities by type
priorityRouter.get('/type/:type', async (req, res) => {
  const {type} = req.params;
  try {
    const result = await getAllPrioritiesByType(type);
    res.status(200).send(result.rows);
  } catch (err) {
    res.status(400).send(err);
  }
});
getAllPrioritiesByType;
// Get priority by organization
priorityRouter.get('/orgs/:orgId/:priorityId', async (req, res) => {
  const {orgId, priorityId} = req.params;
  try {
    res.status(200).send(await getPriorityByOrganization(orgId, priorityId));
  } catch (err) {
    res.status(400).send();
  }
});

// Function is not updating table row
// Q: should this functionality be moved to PATCH /priority?
priorityRouter.patch('/orgs/:orgId/:priorityId', async (req, res) => {
  const {orgId, priorityId} = req.params;
  res.status(418).send('route not constructed');
  try {
    const {rows} = await updatePriorityByOrganization(orgId, priorityId);
    res.status(200).send(rows);
  } catch (err) {
    res.status(400).send();
  }
});

// Q: should this functionality be moved to DELETE /priority?
priorityRouter.delete('/orgs/:orgId/:priorityId', (req, res) => {
  res.status(403).send({error: 'Delete operation not allowed'});
});

priorityRouter.get('/dist/:distId', async (req, res) => {
  try {
    res.status(200).send(await getAllPrioritiesByDistrict(req.params.distId));
  } catch (err) {
    res.status(400).send();
  }
});

/*
router.get('/:distId/:priorityId', async (req, res) => {
  const {distId, priorityId} = req.params;
  try {
    res.status(200).send(await getPriorityByDistrict(distId, priorityId));
  } catch (err) {
    res.status(400).send();
  }
});
*/

module.exports = priorityRouter;

