const { Sequelize, DataTypes } = require('sequelize');

// Get the database connection
const db = new Sequelize('sqlite::memory:');

//Define our models
const User = db.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

const Movie = db.define('Movie', {
  nameOfMovie:  DataTypes.STRING,
  typeOfMovie:  DataTypes.STRING,
  releaseDate:  DataTypes.DATE,
});

const Plant = db.define('Plant', {
  name: DataTypes.STRING,
  size: DataTypes.STRING,
  color: DataTypes.STRING,
});

// IN DEVELOPMENT ONLY!
db.sync();

module.exports = {
  db,
  User,
  Movie,
  Plant,
};
