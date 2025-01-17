const swaggerUi = require('swagger-ui-express');
const apiDocs = require('./api-docs.json');

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocs));
    console.log('Swagger docs available at http://localhost:3000/api-docs');
};

module.exports = setupSwagger;
