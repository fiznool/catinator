'use strict';

var raven = require('raven');

module.exports = function() {
  // Create our raven client for logging exceptions.
  var client = new raven.Client();
  var isEnabled = !!client.dsn;

  // Listen for an uncaughtException,
  // report it, and then exit.
  process.on('uncaughtException', function(e) {
    if(!isEnabled) {
      // Sentry unavailable, just throw the exception as normal.
      throw e;
    }

    console.log('Caught an exception, reporting...');
    console.log(e.stack);

    // On success, client will emit a 'logged' event.
    client.on('logged', function(identity) {
      console.log('Error sent to Sentry, response:', identity);

      // Always crash after an uncaughtException.
      process.exit(1);
    });

    // On error, raven will emit an 'error' event.
    client.on('error', function(e) {
      console.log('Error could not be sent to Sentry:', e);

      // Always crash after an uncaughtException.
      process.exit(1);
    });

    // Report the error to Sentry.
    client.captureError(e);
  });
};
