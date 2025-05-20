const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path');

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
 router.get('/product/get-products', (req, res, next) =>{
    console.log("in get products middleware");
    res.sendFile(path.join(__dirname, '../','views','Product', 'main.html'));
    //res.send('<form action="/api/product/product-by-id" method="POST"><input type="text" name="title" \> <button type="subtmit">Go to product by id</button></button> </form>');// this method allow us to send a response
})

/**
 * @swagger
 * /api/product/product-by-id:
 *   post:
 *     summary: Obtiene un produto en json
 *     tags: [Productos]
 *     description: Devuelve un producto.
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
 *                   example: "calling to product by id!"
 */
router.post('/product/product-by-id', (req, res, next) =>{
    console.log("product-by-id");
    console.log(req.body);
    res.send('<h1>product-by-id view</h1>');// this method allow us to send a response
});


/**
 * @swagger
 * /api/product/add-product:
 *   post:
 *     summary: Crea un nuevo produto
 *     tags: [Productos]
 *     description: Crea un producto.
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
 *                   example: "add a product!"
 */
router.get('/product/add-product', (req, res, next) =>{
    console.log("in add product middleware");
    res.sendFile(path.join(__dirname, '../','views','Product', 'add-product.html'));
    // res.send('<h1> add product view</h1>');// this method allow us to send a response
});

router.post('/product/delete-product', (req, res, next) =>{
    console.log("in delete product middleware");
    res.send('<h1>delete product view</h1>');// this method allow us to send a response
});

router.post('/product/update-product', (req, res, next) =>{
    console.log("in update product middleware");
    res.send('<h1>update product view</h1>');// this method allow us to send a response
});


module.exports = router;