const app = require('express')();
const router = require('./server/controllers/router.js');

app.use('/orgs', router)

app.listen(3000);