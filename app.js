const app = require('express')();
const morgan = require('morgan');
const priorityRouter = require('./server/controllers/priorityRouter');
const organizations = require('./server/controllers/orgRouter.js');
const users = require('./server/controllers/userRouter.js');
const types = require('./server/controllers/typeRouter.js');
const events = require('./server/controllers/eventsRouter.js');

// Middleware
app.use(morgan('dev'));

// Routes
app.use('/orgs', organizations);
app.use('/users', users);
app.use('/types', types);
app.use('/events', events);
app.use('/priorities', priorityRouter);
// app.use('/priorities/orgs', priorityOrganizationRouter)
// app.use('/priorities/dist', priorityDistrictRouter);

// app.use(express.static(path.join(__dirname, './build')));

app.listen(3000, () => {
	console.log('Hido ho, Captn! Listending on port 3000.');
});
