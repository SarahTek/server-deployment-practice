'use strict';

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
