// db/db.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Example SQLite database file path
});

module.exports = sequelize;
