'use strict';

const express = require('express');
const {logger} = require('./middleware/logger');
require('./db');
const { db, Plant, Movie } = require('./db');

const {validator} = require ('./middleware/validator');
const Collection = require('../src/models/collection-class');
const {makeError} = require('./error-handlers/404');
const {serverError} = require('./error-handlers/500');
// const { plant } = require('./models/plantModels');
// const { movie } = require('./models/movieModels');


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


new Collection(Plant, app, 'plant');
new Collection(Movie, app, 'movie');


app.use('*', makeError);
app.use(serverError);

const shouldSyncInStart = true;
async function start(port) {
  if (shouldSyncInStart){
    await db.sync();
  }
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};
