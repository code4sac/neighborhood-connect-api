const AWS = require('aws-sdk');
const logService = require('./logService.js');

const SourceEmail = 'neighborhoodconnect.sac@gmail.com';

AWS.config.loadFromPath(`${process.cwd()}/server/configs/aws.config.json`);

const ses = new AWS.SES();
const sns = new AWS.SNS();

module.exports = {
  sendEmail: async (toEmail, subjectText, bodyText) => {
    try {
      const params = {
        Destination: {
          ToAddresses: [
            toEmail,
          ],
        },
        Message: {
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: bodyText,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: subjectText,
          },
        },
        Source: SourceEmail,
      };

      const data = await ses.sendEmail(params).promise();

      logService.logDebug(data.MessageId);
    } catch (err) {
      logService.logError(err);
    }
  },
  sendSMS: async (phoneNumber, message) => {
    try {
      const params = {
        Message: message,
        PhoneNumber: phoneNumber,
      };

      // Create the promise and SES service object
      const data = await sns.publish(params).promise();

      logService.logDebug(data.MessageId);
    } catch (err) {
      logService.logError(err);
    }
  },
};
