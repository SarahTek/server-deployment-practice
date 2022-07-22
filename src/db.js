const { Sequelize, DataTypes } = require('sequelize');
const { movie } = require('./models/movieModels');
const { plant } = require('./models/plantModels');

// Get the database connection
let connection_string;
switch (process.env.NODE_ENV) {
  case 'production':
    connection_string = process.env.DATABASE_URL;
    break;
  case 'test':
    connection_string = 'sqlite::memory:';
    break;
  case 'staging':
  default:
    connection_string = `sqlite:${process.env.SQLITE_FILE ?? '../db'}`;
    break;
}

const db = new Sequelize(connection_string, {
    // For postgres only
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

//Define our models
// const User = db.define('User', {
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE,
// });

// const Movie = db.define('Movie', {
//   nameOfMovie:  DataTypes.STRING,
//   typeOfMovie:  DataTypes.STRING,
//   releaseDate:  DataTypes.DATE,
// });

// const Plant = db.define('Plant', {
//   name: DataTypes.STRING,
//   size: DataTypes.STRING,
//   color: DataTypes.STRING,
// });

// IN DEVELOPMENT ONLY!


db.sync();

module.exports = {
  db,
  Movie: movie(db),
  Plant: plant(db),

};
