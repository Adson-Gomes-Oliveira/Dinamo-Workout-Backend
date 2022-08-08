const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routers = require('./routes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/users', routers.Users);
app.use('/exercises', routers.Exercises);
app.use('/schemas', routers.Schema);
app.use('/health', routers.Health);

module.exports = app;
