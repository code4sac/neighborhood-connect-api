const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const priorityRouter = require('./server/controllers/priorityRouter');
const organizations = require('./server/controllers/orgRouter.js');
const users = require('./server/controllers/userRouter.js');
const types = require('./server/controllers/typeRouter.js');
const actions = require('./server/controllers/actionsRouter.js');

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/priorities', priorityRouter);
app.use('/orgs', organizations);
app.use('/users', users);
app.use('/types', types);
app.use('/events', actions);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
