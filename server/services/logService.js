const log4js = require('log4js');

const isProd = (process.env.NODE_ENV === 'production');

const logger = log4js.getLogger();

// set level to error or fatal if in production.
logger.setLevel(((isProd) ? 'error' : 'info'));

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
