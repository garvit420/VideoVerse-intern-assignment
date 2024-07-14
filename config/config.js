const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    storage: process.env.DB_STORAGE || 'database.sqlite',
    dialect: 'sqlite'
  },
  tokenKey: process.env.TOKEN_KEY || 'uwFSmFs2PBtXH2kOgQd967AzSWiLHPveBTgV828LVT2Ik64m3h007m7t6CDdwZ3Y',
  upload: {
    maxSize: process.env.UPLOAD_MAX_SIZE || 25 * 1024 * 1024, // 25 MB
    minDuration: process.env.UPLOAD_MIN_DURATION || 5, // 5 seconds
    maxDuration: process.env.UPLOAD_MAX_DURATION || 25, // 25 seconds
  },
};
