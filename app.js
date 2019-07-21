const app = require('express')();
const morgan = require('morgan');
const cors = require('cors');
const {
	priorityRouter,
	priorityOrganizationRouter,
	priorityDistrictRouter
} = require('./server/controllers/priorityRouter');
const organizations = require('./server/controllers/orgRouter.js');
const users = require('./server/controllers/userRouter.js');
const types = require('./server/controllers/typeRouter.js');
const actions = require('./server/controllers/actionsRouter.js/');

// Middleware
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/orgs', organizations);
app.use('/users', users);
app.use('/types', types);
app.use('/actions', actions);
app.use('/priorities', priorityRouter);
app.use('/priorities/orgs', priorityOrganizationRouter);
app.use('/priorities/dist', priorityDistrictRouter);

// app.use(express.static(path.join(__dirname, './build')));

app.listen(3000, () => {
	console.log('Hido ho, Captn! Listening on port 3000.');
});
