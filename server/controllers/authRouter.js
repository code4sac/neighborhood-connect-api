const router = require('express').Router();
const Auth = require('../services/auth.js');

// signup: create user with username and password, validating confirmPassword.
router.post('/', async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;

        const fieldsDontExist = !(username && password && confirmPassword);

        if (fieldsDontExist || password !== confirmPassword) {
            res.send(400);
        } else {
            const result = await Auth.registerUser(username, password);

            if (!result.err) {
                res.send(500, result.err);
            } else {
                res.send(200, result.data);
            }
        }
    } catch (err) {
        res.send(500, err);
    }
});

// signin: login user with username and password.
router.get('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        const fieldsDontExist = !(username && password);

        if (fieldsDontExist) {
            res.send(403);
        } else {
            const result = { err : true }; //todo do something here;

            if (result.err) {
                res.send(403);
            } else {
                res.send(200, result.data);
            }
        }
    } catch (err) {
        res.send(403, err);
    }
});

module.exports = router;
