// Documentacion para el curso de node Express
1.- lo primero es installar nuestra app de Express
    $ npm init -y
    $ npm install --save express
    $ npm install -g nodemon
    $ npm install mongodb
    $ npm install mongoose
    $ npm install dotenv // es para la variables de entorno
// -------------------------------------

2.- Se agreagan los siguientes scripts al package.json 
    "start": "node index.js",
    "dev": "nodemon index.js"
//---------------------------------------

3.- installar Swagger UI and body parser
    $ npm install swagger-ui-express swagger-jsdoc
    $ npm install --save body-parser
//--------------------------------------

4.- Edita tu archivo principal (por ejemplo, app.js) para configurar Swagger.
    const express = require('express');
    const swaggerUi = require('swagger-ui-express');
    const swaggerJsdoc = require('swagger-jsdoc');
//-----------------------------------------

5.- Configura la información básica de tu API, esto en tu app.js:
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
//-------------------------------------------------------

6.- Añade esta línea antes o después de tus rutas (generalmente antes) en app.js:
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//------------------------------------------------------
7.- crea un archivo de rutas para documentar endpoints
    const express = require('express');
        const router = express.Router();

        /**
        * @swagger
        * /example:
        *   get:
        *     summary: Obtiene un ejemplo
        *     description: Devuelve un mensaje de ejemplo.
        *     responses:
        *       200:
        *         description: Éxito.
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               properties:
        *                 message:
        *                   type: string
        *                   example: "Hello from example!"
        */
        router.get('/example', (req, res) => {
            res.json({ message: 'Hello from example!' });
        });

        module.exports = router;    
//---------------------------------------------------

8.- Y luego, en tu archivo app.js, monta el router:
    const exampleRoutes = require('./routes/rutas');
    app.use('/api', exampleRoutes);
