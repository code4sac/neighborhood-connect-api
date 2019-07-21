const app = require('express')();
const organizations = require('./server/controllers/orgRouter.js');
const priorityRouter = require('./server/controllers/priorityRouter');

app.use('/orgs', organizations);
// app.use('/users', userRouter)
app.use('/priorities/orgs', priorityRouter)
app.use('/', priorityRouter);

app.use('/types', function(){});
app.listen(3000)
