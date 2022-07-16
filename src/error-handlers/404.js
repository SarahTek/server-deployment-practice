'use strict';

const makeError = (req, res) => {
  res.status(404).send('Not-Found');
};
module.exports = {
  makeError,
};
