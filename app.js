const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
//const http = require("http");


const app = express();
app.use(express.json());

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
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//importar rutas
const exampleRoutes = require('./routes/rutas');
app.use('/api', exampleRoutes);

const rutasProducto = require('./routes/productos');
app.use('/api', rutasProducto);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});


app.listen(3000, () =>{
    console.log(`Servidor corriendo en http://localhost:3000`);
    console.log(`Documentación disponible en http://localhost:3000/docs`);

})

