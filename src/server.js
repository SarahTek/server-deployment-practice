'use strict';

const express = require('express');
const {logger} = require('./middleware/logger');

require('./db');

const {validator} = require ('./middleware/validator');
const { createMovie, listMovies, getMovie } = require('./models/movie');
const { createPlant, listPlant, getPlant } = require('./models/plant');

const {makeError} = require('./error-handlers/404');
const {serverError} = require('./error-handlers/500');


const app = express();
app.use(express.json());
app.use(logger);

const hello = (req, res) => res.status(200).send('Hello, World');
const data = (req, res) => {
  res.status(200).send({
    name: 'Sarah',
    role: 'student',
  });
};

const person = (req, res) => {
  if(req.params.name){
    res.status(200).send({ name: req.params.name});
  }else{
    res.status(500).send('Sorry can not find that! no valid name');
  }
};

app.get('/', hello);
app.get('/data', data);
app.get('/person/:name', validator, person);
app.get('/person', person);

app.get('/movie',createMovie);
app.post('/movie', listMovies);
app.get('/movie/:id', getMovie);

app.get('/movie',createPlant);
app.post('/movie', listPlant);
app.get('/movie/:id', getPlant);

app.use('*', makeError);
app.use(serverError);

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
