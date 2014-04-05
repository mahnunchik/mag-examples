

var mag = require('mag');

/**
 * We can use namespace in our application
 */

var logger = mag('my-application');

/**
 * If we include module that uses the mag
 * we will see messages of module in our terminal
 */

var mag_examples_module = require('mag-examples-module');

var env = process.env.NODE_ENV || 'development';

/**
 * We can use printf()-like way
 */

logger.info('application is running in %s environment', env);

/**
 * All non-specific methods can take multiple arguments
 */

logger.debug('current working directory is:', process.cwd());

/**
 * Call bad method of module
 */

mag_examples_module.someMethod();

/**
 * Please see app-formatted-output branch to understand
 * full power of mag and mag-hub modules ;)
 */
