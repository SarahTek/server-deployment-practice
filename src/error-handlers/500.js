'use strict';

// 500.js
// Sends a 500/Server Error message as the response
// Import this into your server and set it up to be “used” as the last route

const serverError = (req, res) => {
  res.status(500).send('Sorry can not find that!');
};
module.exports = {
 serverError,
};
