const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();

// Middleware para analizar datos de formularios en este router específico
router.use(express.urlencoded({ extended: false }));
/**
 * @swagger
 * tags:
 *   name: example
 *   description: API para gestionar productos
 * /api/example:
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

router.use('/pruebaExpress', (req, res, next) =>{
    console.log("in the another middleware");
    res.send('<h1>Hellou express.jsssss</h1>');// this method allow us to send a response
});



module.exports = router;