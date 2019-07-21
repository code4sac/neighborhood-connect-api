const app = require('express')();
const morgan = require('morgan');

// const priorities = require("./server/controllers/priorityRouter.js");
const organizations = require('./server/controllers/orgRouter.js');
<<<<<<< HEAD

// const users = require("./server/controllers/userRouter.js");
=======
const users = require('./server/controllers/userRouter.js');
>>>>>>> b8d4c1e766d8b86a79246335faa39ce1d87ba02c
const types = require('./server/controllers/typeRouter.js');
const events = require('./server/controllers/eventsRouter.js');
const {
    priorityRouter,
    priorityOrganizationRouter,
    priorityDistrictRouter
} = require('./server/controllers/priorityRouter');

// Middleware
app.use(morgan('dev'));

// Routes

// app.use('/priorities', priorities);
app.use('/orgs', organizations);
app.use('/users', users);
app.use('/types', types);
app.use('/events', events);
app.use('/priorities', priorityRouter);
app.use('/priorities/orgs', priorityOrganizationRouter)
app.use('/priorities/dist', priorityDistrictRouter);

// app.use(express.static(path.join(__dirname, './build')));

app.listen(3000, () => {
	console.log('Hido ho, Captn! Listending on port 3000.');
});
