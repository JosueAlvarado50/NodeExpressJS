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