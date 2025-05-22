// require('dotenv').config();
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Conectado a MongoDB Atlas');
//   } catch (err) {
//     console.error('Error al conectar a MongoDB:', err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = callback =>{
    MongoClient.connect(process.env.MONGO_URI)
    .then(client =>{
        console.log("Connected to Mongo antlas")
        _db = client.db()
        callback();
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

const getDb = () =>{
    if (_db) {
        return _db;
    }
    throw new Error("Not data base found");
    
}


//module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
exports.ObjectId = mongodb.ObjectId;