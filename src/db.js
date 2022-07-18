const { Sequelize } = require('sequelize');

// Get the database connection
const db = new Sequelize('sqlite::memory:');






db.sync();

module.exports = {
  db,

};
