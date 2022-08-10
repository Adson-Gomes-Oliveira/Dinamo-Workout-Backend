const swagger = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFile = [
  './src/routes/userRoutes',
  './src/routes/healthRoutes',
  './src/routes/schemaRoutes',
  './src/routes/exerciseRoutes',
];

swagger(outputFile, endpointsFile);
