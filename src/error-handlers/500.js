'use strict';


const serverError = (req, res) => {
  res.status(500).send('Sorry can not find that!');
};
module.exports = {
  serverError,
};
