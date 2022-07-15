'use strict';

// Create a error-handlers folder and add 2 modules to it:
// 404.js
// Sends a 404/Not-Found message as the response
// Import this into your server and set it up to be “used” after your other routes
const makeError = (req, res) => {
  res.status(404).send('Not-Found');
};
module.exports = {
  makeError,
};
