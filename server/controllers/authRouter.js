const router = require('express').Router();
const AWS = require('aws-sdk');

const cognitoIdentity = new AWS.CognitoIdentity({
    UserPoolId : 'us-west-2_q2Y6U8uuY',
    ClientId : '224kjog47ojnt9ov773erj7qn9'
});

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
    UserPoolId : 'us-west-2_q2Y6U8uuY',
    ClientId : '224kjog47ojnt9ov773erj7qn9'
});

const signup = async (username, password) => {
    const params = {
        ClientId: 'STRING_VALUE', /* required */
        Password: password, /* required */
        Username: username, /* required */
        AnalyticsMetadata: {
            AnalyticsEndpointId: 'STRING_VALUE'
        },
        SecretHash: 'STRING_VALUE',
        UserAttributes: [
            {
                Name: 'STRING_VALUE', /* required */
                Value: 'STRING_VALUE'
            },
            /* more items */
        ],
        UserContextData: {
            EncodedData: 'STRING_VALUE'
        },
        ValidationData: [
            {
                Name: 'STRING_VALUE', /* required */
                Value: 'STRING_VALUE'
            },
            /* more items */
        ]
    };

    const { err, data } = await cognitoIdentityServiceProvider.signUp(params);

    if (err) {
        console.log(err, err.stack);
        return { data: null, err } ;
    }

    // successfully signed-up
    return { data, err: null };
};

const signin = async (username, password) => {
    const result = await cognitoIdentityServiceProvider.getUser();

    return result;
};

// signup: create user with username and password, validating confirmPassword.
router.post('/', async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;

        const fieldsDontExist = !(username && password && confirmPassword);

        if (fieldsDontExist || password !== confirmPassword) {
            res.send(400);
        } else {
            const result = await signup(username, password);

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
            const result = await signin(username, password);

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
