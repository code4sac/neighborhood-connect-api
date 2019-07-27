const log4js = require('log4js');
const Utilities = require('../utils.js');

const logger = log4js.getLogger();

// set level to error or fatal if in production.
logger.setLevel(((Utilities.isProdEnv()) ? 'error' : 'info'));

const Logger = {
  logError: (message) => {
    logger.error(message);
  },
  logFatal: (message) => {
    logger.fatal(message);
  },
  logDebug: (message) => {
    logger.debug(message);
  },
  logInfo: (message) => {
    logger.info(message);
  },
};

module.exports.Logger = Logger;
