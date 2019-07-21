const app = require('express')();
const priorities = require('./server/controllers/priorityRouter.js');
const organizations = require('./server/controllers/orgRouter.js');
const users = require('./server/controllers/userRouter.js');
const types = require('./server/controllers/typeRouter.js');


//app.use('/priorities', priorities);
app.use('/orgs', organizations);
//app.use('/users', users);
app.use('/types', types);

app.listen(3000);
