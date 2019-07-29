const AWS = require('aws-sdk');
const Logger = require('logService.js');

const SourceEmail = 'neighborhoodconnect.sac@gmail.com';

AWS.config.loadFromPath('configs/aws.config.json');

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

      Logger.logDebug(data.MessageId);
    } catch (err) {
      Logger.logError(err);
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

      Logger.logDebug(data.MessageId);
    } catch (err) {
      Logger.logError(err);
    }
  },
};
