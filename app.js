const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();
const cors = require('cors')
// const connectDB = require('./Database/database');
//const http = require("http");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5000', // Origen permitido (Swagger UI o frontend)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
};

app.use(cors(corsOptions));
console.log('MONGO_URI:', process.env.MONGO_URI);



//conexion a MongoDB
// connectDB();

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
                url: 'http://localhost:5000', // Cambia esto si usas un dominio o puerto diferente
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


// app.listen(3000, () =>{
//     console.log(`Servidor corriendo en http://localhost:3000`);
//     console.log(`Documentación disponible en http://localhost:3000/docs`);

// })
const mongoConnect = require('./Database/database').mongoConnect;
mongoConnect(() =>{
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
        console.log(`Documentación disponible en http://localhost:${PORT}/docs`);
    });
})

