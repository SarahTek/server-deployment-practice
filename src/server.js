'use strict';

const express = require('express');
const {logger} = require('./middleware/logger');
const {validator} = require ('./middleware/validator');
const {makeError} = require('./error-handlers/404');
const {serverError} = require('./error-handlers/500');


const hello = (req, res) => res.status(200).send('Hello, World');
const data = (req, res) => {
  res.status(200).send({
    name: 'Sarah',
    role: 'student',
  });
};

const person = (req, res) => {
  res.status(200).send({ name: req.params.name });
};

const app = express();
app.use(logger);
app.get('/', hello);
app.get('/data', data);
app.use(makeError);
app.use(serverError);
app.get('/person/:name', validator, person);

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
