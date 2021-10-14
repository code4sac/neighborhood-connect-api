const app = require('./app.js')

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});