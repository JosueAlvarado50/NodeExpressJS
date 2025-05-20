const express = require('express');
const app = express();
const router = express.Router();

/**
 * @swagger
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


/**
 * @swagger
 * /api/get-products:
 *   get:
 *     summary: Obtiene una una lista de produtos en json
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
 router.get('/get-products', (req, res, next) =>{
    console.log("in get products middleware");
    res.send('<form action="/api/product-by-id" method="POST"><input type="text" name="title" \> <button type="subtmit">Go to product by id</button></button> </form>');// this method allow us to send a response
})

/**
 * @swagger
 * /api/product-by-id:
 *   get:
 *     summary: Obtiene un produto en json
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
router.post('/product-by-id', (req, res, next) =>{
    console.log("product-by-id");
    res.send('<h1>product-by-id view</h1>');// this method allow us to send a response
});

router.use('/pruebaExpress', (req, res, next) =>{
    console.log("in the another middleware");
    res.send('<h1>Hellou express.jsssss</h1>');// this method allow us to send a response
});
router.use('/add-product', (req, res, next) =>{
    console.log("in add product middleware");
    res.send('<h1> add product view</h1>');// this method allow us to send a response
});

router.use('/delete-product', (req, res, next) =>{
    console.log("in delete product middleware");
    res.send('<h1>delete product view</h1>');// this method allow us to send a response
});

router.use('/update-product', (req, res, next) =>{
    console.log("in update product middleware");
    res.send('<h1>update product view</h1>');// this method allow us to send a response
});


module.exports = router;