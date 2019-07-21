const app = require('express')();
const organizations = require('./server/controllers/orgRouter.js');


app.use('/orgs', organizations);
// app.use('/users', userRouter)
// app.use('/priorities', priorityRouter)


app.use('/types', function(){});

app.listen(3000);
