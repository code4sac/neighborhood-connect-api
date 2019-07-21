const app = require('express')();
const organizations = require('./server/controllers/orgRouter.js');
const {
    priorityRouter,
    priorityOrganizationRouter,
    priorityDistrictRouter
} = require('./server/controllers/priorityRouter');

app.use('/orgs', organizations);
// app.use('/users', userRouter)
app.use('/priorities', priorityRouter);
app.use('/priorities/orgs', priorityOrganizationRouter)
app.use('/priorities/dist', priorityDistrictRouter);

app.use('/types', function () { });
app.listen(3000)
