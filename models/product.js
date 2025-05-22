const getDb = require("../Database/database").getDb;
const mongodb = require("mongodb");

class Product {
  constructor(
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
    createdAt,
    id
  ) {
    (this.nombre = nombre),
      (this.categoria = categoria),
      (this.descripcion = descripcion),
      (this.fechaCultivo = fechaCultivo),
      (this.tiempoCrecimiento = tiempoCrecimiento),
      (this.frecuenciaRiego = frecuenciaRiego),
      (this.cantidadRiego = cantidadRiego),
      (this.tipoRiego = tipoRiego),
      (this.ubicacion = ubicacion),
      (this.status = status),
      (this.observaciones = observaciones),
      (this.createdAt = createdAt),
      (this._id = id);
  }

  save() {
    const db = getDb();
    let dbOp;
    console.log("valor del id a actualizar");
    console.log(this._id);

    if (this._id) {
      //update product
      dbOp = db
        .collection("products")
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this }); // el objeto que viene en this remplazaria al objeto que coincida con ese _id
    } else {
      dbOp = db.collection("products").insertOne(this); //cambiar por this ahorita solo esta de prueba
    }
    return dbOp
      .then((result) => {
        console.log("producto insertado exitosamente: ");
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static fetchAllProducts() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((error) => {
        console.error("Error al obtener todos los productos");
      });
  }

  static findById(idProduct) {
    const db = getDb();

    try {
      const objectId = new mongodb.ObjectId(idProduct);
      return db
        .collection("products")
        .find({ _id: objectId }) // Devuelve un cursor
        .toArray() // Convierte el cursor en una promesa
        .then((products) => {
          console.log(products);
          return products; // Array de productos
        });
    } catch (error) {
      console.error("Error al obtener los productos con el id: " + idProduct);
      return Promise.reject(new Error("ID inválido"));
    }
  }

  static deleteById(productId) {
    const objectId = new mongodb.ObjectId(productId);
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: productId })
      .then((result) => {
        console.log("product was deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = Product;
