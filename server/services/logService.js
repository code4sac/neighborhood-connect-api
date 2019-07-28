const log4js = require('log4js');
const Utilities = require('../../utils.js');

const logger = log4js.getLogger();

// set level to error or fatal if in production.
logger.level = (Utilities.isProdEnv()) ? 'error' : 'info';

module.exports = {
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
