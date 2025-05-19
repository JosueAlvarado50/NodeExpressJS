const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const http = require("http");

const app = express();

const server = http.createServer(app);

server.listen(3000)

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Template',
            version: '1.0.0',
            description: 'Plantilla para APIs con Express y Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Cambia esto si usas un dominio o puerto diferente
            },
        ],
    },
    apis: ['./routes/*.js'], // Ruta a tus archivos de rutas donde documentarás los endpoints
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const exampleRoutes = require('./routes/rutas');
app.use('/api', exampleRoutes);


