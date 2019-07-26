const AWS = require('aws-sdk');

const SourceEmail = 'neighborhoodconnect.sac@gmail.com';

module.exports = {
  sendEmail(toEmail, subjectText, bodyText) {
    AWS.config.loadFromPath('configs/aws.config.json');

    // Create sendEmail params
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

    // Create the promise and SES service object
    const sendPromise = new AWS.SES().sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
        function(data) {
          console.log(data.MessageId);
        }).catch(
        function(err) {
          console.error(err, err.stack);
        });
  },
};
