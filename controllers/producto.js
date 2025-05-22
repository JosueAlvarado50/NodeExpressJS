const Product = require("../models/product");
const { ObjectId } = require('mongodb');

exports.getProducts = (req, res, next) => {
  Product.fetchAllProducts()
    .then((products) => {
      res.status(201).json({
        message: "Productos descargados exitosamente",
        producto: products, // Devuelve el producto creado
      });

      // res.render('/product/get-products',{
      //    prods: products,
      //    pageTitle: 'All products',
      //    path: '/views/Product/main.html'
      // })
    })
    .catch((error) => {
      console.error("error al descargar todos los productos");
      res.status(400).json({
        message: "Error al intentar bajar los productos",
        error: error.message,
      });
    });
};

exports.getProductById = (req, res, next) => {
  const productId = req.params.productId;

  Product.findById(productId)
    .then((product) => {
      if (product.length === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      res.status(201).json({
        message: "Producto descargado exitosamente",
        producto: product, // Devuelve el producto creado
      });
    })
    .catch((error) => {
      console.error("error al descargar el producto");
      res.status(400).json({
        message: "Error al intentar bajar el producto con ese id: " + productId,
        error: error.message,
      });
    });
};

exports.postAddProduct = (req, res, next) => {
  const nombre = req.body.nombre;
  const categoria = req.body.categoria;
  const descripcion = req.body.descripcion;
  const fechaCultivo = req.body.fechaCultivo;
  const tiempoCrecimiento = req.body.tiempoCrecimiento;
  const frecuenciaRiego = req.body.frecuenciaRiego;
  const cantidadRiego = req.body.cantidadRiego;
  const tipoRiego = req.body.tipoRiego;
  const ubicacion = req.body.ubicacion;
  const status = req.body.status;
  const observaciones = req.body.observaciones;
  const createdAt = new Date();

  const product = new Product(
    nombre,
    categoria,
    descripcion,
    fechaCultivo,
    tiempoCrecimiento,
    frecuenciaRiego,
    cantidadRiego,
    tipoRiego,
    ubicacion,
    status,
    observaciones,
    createdAt
  );

  product
    .save()
    .then((product) => {
      if (product.length === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
      console.log("producto creado satisfactoriamente");
      res.status(201).json({
        message: "Producto creado exitosamente",
        producto: product, // Devuelve el producto creado
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Error al intentar crear el producto",
        error: error.message,
      });
      console.error("no se pudo crear el producto");
    });
};

exports.postEditProduct = (req, res, next) => {
  const productId = req.params.productId;

  // Verifica si el ID es válido
  try {
    const objectId = new ObjectId(productId);

    // Busca el producto existente
    Product.findById(objectId)
      .then((existingProduct) => {
        if (!existingProduct || existingProduct.length === 0) {
          return res.status(404).json({ message: "Producto no encontrado" });
        }
        console.log("vamos a ver que tiene existing product");
        console.log(existingProduct);

        // Actualiza el producto
        const updatedProduct = new Product(
          req.body.nombre,
          req.body.categoria,
          req.body.descripcion,
          req.body.fechaCultivo,
          req.body.tiempoCrecimiento,
          req.body.frecuenciaRiego,
          req.body.cantidadRiego,
          req.body.tipoRiego,
          req.body.ubicacion,
          req.body.status,
          req.body.observaciones,
          req.body.createdAt,
          objectId // Incluye el ObjectId para actualizar
        );

        return updatedProduct.save();
      })
      .then(() => {
        res.status(200).json({ message: "Producto actualizado exitosamente" });
      })
      .catch((error) => {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor", error: error.message });
      });
  } catch (error) {
    console.error("ID inválido:", error.message);
    res.status(400).json({ message: "ID inválido", error: error.message });
  }
};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.params.productId;

  // Verifica si el ID es válido
  try {
    const objectId = new ObjectId(productId);
    Product.deleteById(objectId).then(() =>{
        console.log("producto eliminado correctamente");
         res.status(200).json({ message: "Producto eliminado exitosamente" });

    }).catch(error =>{
        console.log("error al eliminar el producto con el id: " + productId);
        res.status(400).json({ message: "ID inválido", error: error.message });
    })


  } catch (error) {
    console.error("ID inválido:", error.message);
    res.status(400).json({ message: "ID inválido", error: error.message });
  }
};