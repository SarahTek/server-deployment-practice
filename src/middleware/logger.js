'use strict';

const logger = (req, res, next) => {
  console.log( req.method, res.url);
  next();
};
module.exports = {
  logger,
};
