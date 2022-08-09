const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger_output.json');
const routers = require('./routes');
const error = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/users', routers.Users);
app.use('/exercises', routers.Exercises);
app.use('/schemas', routers.Schema);
app.use('/health', routers.Health);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(error);

module.exports = app;
