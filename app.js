const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const config = require('./config/config');
const sequelize = require('./db/db');
const routes = require('./routes');
// const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const app = express();

app.use(bodyParser.json());
// app.use(routes);
const uploadRoutes = require('./routes/uploadRoutes');
app.use('/api', uploadRoutes);
// app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app;
