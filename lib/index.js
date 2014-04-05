
var hub = require('mag-hub');
var through2 = require('through2');
var util = require('util');

var env = process.env.NODE_ENV || 'development';

hub.pipe(through2.obj(function(data, enc, cb){
  data.severity = data.severity || 'DEBUG';
  data.timestamp = data.timestamp || new Date();

  if ((env === 'production') && (data.severity === 'DEBUG')) {
    return cb(null);
  }

  if (!data.message){
    if (data.arguments) {
      data.message = util.format.apply(this, data.arguments);
    } else {
      data.message = util.inspect(data);
    }
  }

  var str = data.timestamp.toLocaleTimeString();

  if (data.namespace) {
    str += ' \x1b[0;32m[' + data.namespace + ']\x1b[0m';
  }

  str += ' \x1b[0;36m<' + data.severity + '>\x1b[0m ' + data.message + '\n';

  cb(null, str);
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
