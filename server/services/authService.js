const AWS = require('aws-sdk');
const crypto = require('crypto');
let jwt = require('jsonwebtoken');


AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:b64bb629-ec73-4569-91eb-0d950f854f4f'
});

const cognitoIdentityOptions = {
    UserPoolId : 'us-west-2_q2Y6U8uuY',
    ClientId : '224kjog47ojnt9ov773erj7qn9',
    ClientSecret: '224kjog47ojnt9ov773erj7qn9(*#*('
};

// NOTE: Creds need to be added here. Something about the AWS SDK failing to get the information
// from AWS.config global instance correctly.
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
    credentials: {
        accessKeyId: cognitoIdentityOptions.ClientId,
        secretAccessKey: cognitoIdentityOptions.ClientSecret }
    }, {
    region: 'us-west-2'
});

// A keyed-hash message authentication code (HMAC) calculated using the secret key
// of a user pool client and username plus the client ID in the message.
const generateSecretHash = (username) => {
    const message = `${username}${cognitoIdentityOptions.ClientId}`;
    const hmac = crypto.createHmac('SHA256', cognitoIdentityOptions.ClientSecret);
    return hmac.update(message).digest('base64');
};

const AuthService = {
    // TODO: Test this.
    checkToken: (req, res, next) => {
        // Express headers are auto converted to lowercase
        let token = req.headers['x-access-token'] || req.headers['authorization'];

        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }

        next();

        /*

        if (token) {
            jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Token is not valid'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: 'Auth token is not supplied'
            });
        }*/
    },

    getUserAccount: async (accessToken) => {
        try {
            const params = {
                AccessToken: accessToken /* required */
            };

            const data = await cognitoIdentityServiceProvider.getUser(params).promise();

            console.log(data);
            return data;
        } catch (err) {
            console.log(err, err.stack);
            return err;
        }
    },

    // TODO: Getting back "Unable to verify secret hash for client xxx" even though secret hash is same for given username
    // TODO: Determine how refresh token workflow will be handled. Front end or back end.
    refreshUserToken: async (refreshToken, username) => {
        try {
            const secretHash = generateSecretHash(username);

            const params = {
                AuthFlow: 'REFRESH_TOKEN_AUTH', /* required */
                ClientId: cognitoIdentityOptions.ClientId, /* required */
                AuthParameters: {
                    'REFRESH_TOKEN': refreshToken,
                    'SECRET_HASH': secretHash
                }
            };

            const data = await cognitoIdentityServiceProvider.initiateAuth(params).promise();

            console.log(data);
            return data;
        } catch (err) {
            console.log(err, err.stack);
            return err;
        }
    },

    // NOTE: Confirm USER_PASSWORD_AUTH is enabled for application
    // User Pool > General Settings > App clients > Check 'Enable username-password (non-SRP) flow for app-based authentication (USER_PASSWORD_AUTH)'
    authenticateUser: async (username, password) => {
        try {
            const secretHash = generateSecretHash(username)

            const params = {
                AuthFlow: 'USER_PASSWORD_AUTH', /* required */
                ClientId: cognitoIdentityOptions.ClientId, /* required */
                AuthParameters: {
                    'USERNAME': username,
                    'PASSWORD': password,
                    'SECRET_HASH': secretHash
                }
            };

            const data = await cognitoIdentityServiceProvider.initiateAuth(params).promise();

            console.log(data);
            return data;
        } catch (err) {
            console.log(err, err.stack);
            return err;
        }
    },

    changePassword: async (accessToken, currentPassword, newPassword) => {
        try {
            const params = {
                AccessToken: accessToken, /* required */
                PreviousPassword: currentPassword, /* required */
                ProposedPassword: newPassword /* required */
            };

            const { err, data } = await cognitoIdentityServiceProvider.changePassword(params);

            if (err) {
                console.log(err, err.stack);
                return err;
            }

            console.log(data);
            return data;
        } catch(err) {
            console.log(err, err.stack);
            return err;
        }
    },

    confirmPasswordReset: async (username, newPassword, confirmationCode) => {
        try {
            const secretHash = generateSecretHash(username)

            const params = {
                ClientId: cognitoIdentityOptions.ClientId, /* required */
                Username: username, /* required */
                SecretHash: secretHash, /* required */
                ConfirmationCode: confirmationCode, /* required */
                Password: newPassword, /* required */
            };

            const data = await cognitoIdentityServiceProvider.confirmForgotPassword(params).promise()

            console.log(data);
            return data;
        } catch(err) {
            console.log(err, err.stack);
            return err;
        }
    },

    requestPasswordReset: async (username) => {
        try {
            const secretHash = generateSecretHash(username)

            const params = {
                ClientId: cognitoIdentityOptions.ClientId, /* required */
                Username: username, /* required */
                SecretHash: secretHash, /* required */
            };

            const data = await cognitoIdentityServiceProvider.forgotPassword(params).promise()

            console.log(data);
            return data;
        } catch(err) {
            console.log(err, err.stack);
            return err;
        }
    },

    // NOTE: If verifying user via email link, an app domain must be configured.
    // User Pool settings > App Integration > Domain Name
    // TODO: Figure how how to validate data
    registerUser: async (username, password) => {
        try {
            const secretHash = generateSecretHash(username);

            const params = {
                ClientId: cognitoIdentityOptions.ClientId, /* required */
                Password: password, /* required */
                Username: username, /* required */
                SecretHash: secretHash, /* required */
                UserAttributes: [
                    {
                        Name: 'email', /* required */
                        Value: username
                    },
                    /* more items */
                ],
                ValidationData: [
                    {
                        Name: 'STRING_VALUE', /* required */
                        Value: 'STRING_VALUE'
                    },
                    /* more items */
                ]
            };

            const data = await cognitoIdentityServiceProvider.signUp(params).promise();

            // successfully signed-up
            console.log(data);
            return data;
        } catch (err) {
            console.log(err, err.stack);
            return err;
        }
    }
};


module.exports = AuthService;
