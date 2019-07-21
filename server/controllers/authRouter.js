const router = require('express').Router();
const AuthService = require('../services/authService.js');

// signup: create user with username and password, validating confirmPassword.
router.post('/', async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;

        const fieldsDontExist = !(username && password && confirmPassword);

        if (fieldsDontExist || password !== confirmPassword) {
            res.send(400);
        } else {
            const result = await AuthService.registerUser(username, password);

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
            const result = await AuthService.authenticateUser(username, password);

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

// forgotPassword: user forgot password reset it.
router.get('/reset', async (req, res) => {
   try {
       const { username } = req.body;
       const fieldsDontExist = !(username);

       if (fieldsDontExist) {
           res.send(400);
       } else {
           const result = await AuthService.resetPassword(username);

           if (result.err) {
               res.send(500);
           } else {
               res.send(200);
           }
       }
   }  catch(err) {
       res.send(400, err);
   }
});

// changePassword: user wants to change their password.
router.patch('/', async (req, res) => {
    try {
        const { username, currentPassword, newPassword, confirmNewPassword } = req.body;

        const fieldsDontExist = !(username && currentPassword && newPassword && confirmNewPassword);
        const newMatchOldDoesnt = (newPassword === confirmNewPassword && newPassword !== currentPassword);

        if (fieldsDontExist || newMatchOldDoesnt) {
            res.send(400);
        } else {
            const result = await AuthService.changePassword(username, currentPassword, newPassword);

            if (result.err) {
                res.send(500);
            } else {
                res.send(200);
            }
        }
    }  catch(err) {
        res.send(400, err);
    }
});

module.exports = router;
