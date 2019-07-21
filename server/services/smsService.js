var AWS = require('aws-sdk');

module.exports = {
  sendSMS(phoneNumber, message) {
    AWS.config.loadFromPath('configs/aws.config.json');

    var params = {
      Message: message,
      PhoneNumber: phoneNumber,
    };

// Create the promise and SES service object
    var publishPromise = new AWS.SNS().publish(params).promise();

// Handle promise's fulfilled/rejected states
    publishPromise.then(
      function(data) {
        console.log(data.MessageId);
      }).catch(
      function(err) {
        console.error(err, err.stack);
      });
  }
}