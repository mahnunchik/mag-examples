
/**
 * To catch all messages from mag we must
 * require 'mag-hub' before any 'mag' requires
 */

var hub = require('mag-hub');
var magProcessInfo = require('mag-process-info');

/**
 * These modules help us to format the messages
 */

var through2 = require('through2');
var util = require('util');

var env = process.env.NODE_ENV || 'development';

/**
 * 'mag-hub' is a readable stream in 'object' mode
 * all log messages inside mag is objects
 */

hub.pipe(magProcessInfo())
  .pipe(through2.obj(function(data, enc, cb){

  /**
   * if severity was not set, we treat message as debug
   */

  data.severity = data.severity || 'DEBUG';
  data.timestamp = data.timestamp || new Date();

  /**
   * Muting debug messages in the production environment
   */

  if ((env === 'production') && (data.severity === 'DEBUG')) {
    return cb(null);
  }

  /**
   * If arguments are given, we format the message as console
   * Otherwise we just inspect full object
   */
  if (!data.message){
    if (data.arguments) {
      data.message = util.format.apply(this, data.arguments);
    } else {
      data.message = util.inspect(data);
    }
  }

  var str = data.timestamp.toLocaleTimeString();

  if (data.hostname) {
    str += ' ' + data.hostname;
  }

  if (data.namespace && data.pid) {
    str += ' \x1b[0;32m' + data.namespace + '[' + data.pid + ']\x1b[0m';
  }

  str += ' \x1b[0;36m<' + data.severity + '>\x1b[0m ' + data.message + '\n';

  cb(null, str);

  /**
   * In the end we just write the string to stdout
   */
})).pipe(process.stdout);

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


/**
 * We can use printf()-like way
 */

logger.info('application is running in %s environment', env);

if (env !== 'production') {
  logger.info('try to launch the app in production mode '+
    'to desable "DEBUG" messages\n'+
    '$ NODE_ENV=production npm start');
}

/**
 * All non-specific methods can take multiple arguments
 */

logger.debug('current working directory is:', process.cwd());

/**
 * Call bad method of module
 */

mag_examples_module.someMethod();
