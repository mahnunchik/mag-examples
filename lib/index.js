

var mag = require('mag');
var logger = mag('my-application');

var env = process.env.NODE_ENV || 'development';

/**
 * We can use printf()-like way
 */

logger.info('application is running in %s environment', env);

/**
 * All non-specific methods can take multiple arguments
 */

logger.debug('current working directory is:', process.cwd());

process.on('exit', function(code) {
  logger.warn("exit code is:", code);
});
