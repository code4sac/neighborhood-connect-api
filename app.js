const app = require('express')();
const organizations = require('./server/controllers/orgRouter.js');
const users = require('./server/controllers/userRouter');
const priorities = require('./server/controllers/priorityRouter');
const types = require('./server/controllers/typeRouter');


app.use('/orgs', organizations);
app.use('/users', users);
app.use('/priorities', priorities);
app.use('/types', types);

app.listen(3000);
