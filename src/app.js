const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routers = require('./routes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/users', routers.Users);

module.exports = app;
