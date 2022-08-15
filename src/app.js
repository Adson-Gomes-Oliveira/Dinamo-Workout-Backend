const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routers = require('./routes');
const authorization = require('./middlewares/authMiddleware');
const error = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/user', routers.Users);
app.use('/login', routers.Login);
app.use(authorization);
app.use('/exercise', routers.Exercises);
app.use('/schema', routers.Schema);
app.use('/health', routers.Health);
app.use('/registry', routers.Registry);
app.use(error);

module.exports = app;
