'use strict';
// validator.js
// Checks the query string for a name property
// Sends the request through when valid, forces an error when not

const validator = (req, res, next) => {
  if (req.params.name){
    next();
  } else {
    throw new Error ('sorry wrong name');
  }
};
module.exports = {
  validator,
};
