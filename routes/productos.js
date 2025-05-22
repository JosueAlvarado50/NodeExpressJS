const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/producto')

// Middleware para analizar datos de formularios en este router específico
router.use(express.urlencoded({ extended: true }));


/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: API para gestionar productos
 */

/**
 * @swagger
 * /api/product/get-products:
 *   get:
 *     summary: Obtiene una una lista de produtos en json
 *     tags: [Productos]
 *     description: Devuelve una lista mensaje de ejemplo.
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
 router.get('/product/get-products', productController.getProducts);


 //  router.get('/product/get-products', (req, res, next) =>{
//     console.log("in get products middleware");
//     //res.sendFile(path.join(__dirname, '../','views','Product', 'main.html'));
//     //res.send('<form action="/api/product/product-by-id" method="POST"><input type="text" name="title" \> <button type="subtmit">Go to product by id</button></button> </form>');// this method allow us to send a response
// })


/**
 * @swagger
 * /api/product/product-by-id/{productId}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Productos]
 *     description: Recupera un producto basado en su ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID del producto en MongoDB.
 *     responses:
 *       200:
 *         description: Producto recuperado exitosamente.
 *       400:
 *         description: Error en los datos proporcionados.
 */
router.get('/product/product-by-id/:productId', productController.getProductById);


// router.post('/product/product-by-id', (req, res, next) =>{
//     console.log("product-by-id");
//     console.log(req.body);
//     res.send('<h1>product-by-id view</h1>');// this method allow us to send a response
// });


/**
 * @swagger
 * /api/product/add-product:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     description: Crea un producto en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Germen de trigo"
 *               categoria:
 *                 type: string
 *                 enum: ["Germinados", "Flores", "Hierbas", "Otros"]
 *                 example: "Germinados"
 *               descripcion:
 *                 type: string
 *                 example: "Germen fresco de trigo orgánico"
 *               fechaCultivo:
 *                 type: string
 *                 format: date
 *                 example: "2025-05-20"
 *               tiempoCrecimiento:
 *                 type: number
 *                 example: 7
 *               frecuenciaRiego:
 *                 type: number
 *                 example: 3
 *               cantidadRiego:
 *                 type: number
 *                 example: 500
 *               tipoRiego:
 *                 type: string
 *                 enum: ["Manual", "Automático"]
 *                 example: "Automático"
 *               ubicacion:
 *                 type: string
 *                 example: "Sector 1, Área A"
 *               status:
 *                 type: string
 *                 enum: ["En cultivo", "Cosechado", "Inactivo"]
 *                 example: "En cultivo"
 *               observaciones:
 *                 type: string
 *                 example: "Requiere mayor iluminación"
 *     responses:
 *       200:
 *         description: Producto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Producto creado exitosamente"
 *       400:
 *         description: Error en los datos proporcionados.
 */
router.post('/product/add-product', productController.postAddProduct );

// router.get('/product/add-product', (req, res, next) =>{
//     console.log("in add product middleware");
//     res.sendFile(path.join(__dirname, '../','views','Product', 'add-product.html'));
//     // res.send('<h1> add product view</h1>');// this method allow us to send a response
// });





/**
 * @swagger
 * /api/product/delete-product/{productId}:
 *   post:
 *     summary: delete product
 *     tags: [Productos]
 *     description: elimina un producto.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID del producto en MongoDB.
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Producto actualizado exitosamente"
 *       400:
 *         description: Error en los datos proporcionados.
 */
router.post('/product/delete-product/:productId', productController.postDeleteProduct);


/**
 * @swagger
 * /api/product/update-product/{productId}:
 *   post:
 *     summary: actualiza un producto
 *     tags: [Productos]
 *     description: ACtualiza un producto.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID del producto en MongoDB.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Germen de trigo"
 *               categoria:
 *                 type: string
 *                 enum: ["Germinados", "Flores", "Hierbas", "Otros"]
 *                 example: "Germinados"
 *               descripcion:
 *                 type: string
 *                 example: "Germen fresco de trigo orgánico"
 *               fechaCultivo:
 *                 type: string
 *                 format: date
 *                 example: "2025-05-20"
 *               tiempoCrecimiento:
 *                 type: number
 *                 example: 7
 *               frecuenciaRiego:
 *                 type: number
 *                 example: 3
 *               cantidadRiego:
 *                 type: number
 *                 example: 500
 *               tipoRiego:
 *                 type: string
 *                 enum: ["Manual", "Automático"]
 *                 example: "Automático"
 *               ubicacion:
 *                 type: string
 *                 example: "Sector 1, Área A"
 *               status:
 *                 type: string
 *                 enum: ["En cultivo", "Cosechado", "Inactivo"]
 *                 example: "En cultivo"
 *               observaciones:
 *                 type: string
 *                 example: "Requiere mayor iluminación"
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Producto actualizado exitosamente"
 *       400:
 *         description: Error en los datos proporcionados.
 */
router.post('/product/update-product/:productId', productController.postEditProduct);
module.exports = router;