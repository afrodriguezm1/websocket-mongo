const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://<use>:<pas>@mongodb.wp5bu.mongodb.net/test';

function MongoUtils() {
    const mu = {};
  
    // Esta función retorna una nueva conexión a MongoDB.
    // Tenga presente que es una promesa que deberá ser resuelta.
    mu.conn = () => {
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Conectado")
      return client.connect();
    };
    return mu;
  }
  module.exports = MongoUtils();