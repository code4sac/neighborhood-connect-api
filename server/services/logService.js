const log4js = require('log4js');
const Utilities = require('../../utils.js');

const logger = log4js.getLogger();

log4js.configure({
  appenders: {
    'out': {
      type: ((Utilities.isProdEnv()) ? 'stderr' : 'stdout'),
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: ((Utilities.isProdEnv()) ? 'error' : 'debug'),
    },
  },
});

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
  logTrace: (message) => {
    logger.trace(message);
  },
};
