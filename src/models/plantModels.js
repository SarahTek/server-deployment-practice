const {  DataTypes } = require('sequelize');

function plant (db) {
  return db.define('Plant', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
  });
}
module.exports = { plant };
