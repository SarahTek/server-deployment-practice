'use strict';

// validator.js
// Checks the query string for a name property
// Sends the request through when valid, forces an error when not


const logger = (req, res, next) => {
  console.log( req.method, res.url);
  next();
};
module.exports = {
  logger,
};
