const swagger = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointFile = [];

swagger(outputFile, endpointFile);
