const AWS = require('aws-sdk');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

AWS.config.region = 'us-west-2'; // Region

AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:b64bb629-ec73-4569-91eb-0d950f854f4f',
});

const cognitoIdentityOptions = {
  UserPoolId: 'us-west-2_q2Y6U8uuY',
  ClientId: '224kjog47ojnt9ov773erj7qn9',
  ClientSecret: '224kjog47ojnt9ov773erj7qn9(*#*(',
};

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

// A keyed-hash message authentication code (HMAC) calculated using the secret key
// of a user pool client and username plus the client ID in the message.
const generateSecretHash = (username) => {
  const message = `${username}${cognitoIdentityOptions.ClientId}`;
  const hmac = crypto.createHmac('SHA256', cognitoIdentityOptions.ClientSecret);
  return hmac.update(message).digest('base64');
};

const AuthService = {
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
        } */
  },

  getUserAccount: async (accessToken) => {
    try {
      const params = {
        AccessToken: accessToken, /* required */
      };

      const {err, data} = await cognitoIdentityServiceProvider.getUser(params);

      if (err) {
        console.log(err, err.stack);
        return err;
      }

      console.log(data);
      return data;
    } catch (err) {
      console.log(err, err.stack);
      return err;
    }
  },

  refreshUserToken: async (refreshToken, username) => {
    const secretHash = generateSecretHash(username);

    try {
      const params = {
        AuthFlow: 'REFRESH_TOKEN_AUTH', /* required */
        ClientId: cognitoIdentityOptions.ClientId, /* required */
        AuthParameters: {
          REFRESH_TOKEN: refreshToken,
          SECRET_HASH: secretHash,
        },
      };

      const {err, data} = cognitoIdentityServiceProvider.initiateAuth(params);

      if (err) {
        console.log(err, err.stack);
        return err;
      }

      console.log(data);
      return data;
    } catch (err) {
      console.log(err, err.stack);
      return err;
    }
  },

  authenticateUser: async (username, password) => {
    try {
      const params = {
        AuthFlow: 'USER_PASSWORD_AUTH', /* required */
        ClientId: cognitoIdentityOptions.ClientId, /* required */
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password,
        },
      };

      const {err, data} = cognitoIdentityServiceProvider.initiateAuth(params);

      if (err) {
        console.log(err, err.stack);
        return err;
      }

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
        ProposedPassword: newPassword, /* required */
      };

      const {err, data} = await cognitoIdentityServiceProvider.changePassword(params);

      if (err) {
        console.log(err, err.stack);
        return err;
      }

      console.log(data);
      return data;
    } catch (err) {
      console.log(err, err.stack);
      return err;
    }
  },

  resetPassword: async (username) => {
    try {
      const params = {
        UserPoolId: cognitoIdentityOptions.UserPoolId, /* required */
        Username: username, /* required */
      };

      const {err, data} = await cognitoIdentityServiceProvider.adminResetUserPassword(params);

      if (err) {
        console.log(err, err.stack);
        return err;
      }

      console.log(data);
      return data;
    } catch (err) {
      console.log(err, err.stack);
      return err;
    }
  },

  registerUser: async (username, password) => {
    const secretHash = generateSecretHash(username);

    const params = {
      ClientId: cognitoIdentityOptions.ClientId, /* required */
      Password: password, /* required */
      Username: username, /* required */
      SecretHash: secretHash,
      UserAttributes: [
        {
          Name: 'STRING_VALUE', /* required */
          Value: 'STRING_VALUE',
        },
        /* more items */
      ],
      ValidationData: [
        {
          Name: 'STRING_VALUE', /* required */
          Value: 'STRING_VALUE',
        },
        /* more items */
      ],
    };

    const response = await cognitoIdentityServiceProvider.signUp(params);

    const {error, data} = response.response;

    if (error) {
      console.log(error, err.stack);
      return err;
    }

    // successfully signed-up
    console.log(data);
    return data;
  },
};

module.exports = AuthService;
