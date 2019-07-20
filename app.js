<<<<<<< HEAD
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();



app.listen(PORT);
=======
const app = require('express')();
const router = require('./server/controllers/router.js');

app.use('/orgs', router)

app.listen(3000);
>>>>>>> 51c9206cd1fb1095c843c23713f7c6b4b9a32822
