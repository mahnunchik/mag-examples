
/**
 * When we develop a module we can use the mag
 * without any configuration of the output stream
 */

var mag = require('mag');

/**
 * One recommendation is to use a namespace to allow
 * end user to identify the messages from your module
 */

var logger = mag('mag-example-module');

var env = process.env.NODE_ENV || 'development';

/**
 * We can use printf()-like way
 */

logger.info('module is running in %s environment', env);

/**
 * While we develop a module we will see messages
 * with timestamp in our terminal
 */

setInterval(function(){
  logger.debug('heartbeat of module');
}, 3000)

/**
 * Will be used in application example
 */
exports.someMethod = function (){
  logger.error(new Error('someMethod is bad method!'));
}
