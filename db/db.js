const sequelize = require('../config/database');
const Video = require('./models/video');

const db = {
  sequelize,
  Sequelize,
  Video: Video(sequelize, Sequelize.DataTypes)
};

module.exports = db;
