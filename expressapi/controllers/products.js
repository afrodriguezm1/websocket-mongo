const mdbconn = require('../lib/utils/mongo.js');

function getProducts() {
  return mdbconn.conn().then((client) => {
    return client.db('isis3710').collection('productos').find({}).toArray();
  });
}

function insertProduct(product) {
  return mdbconn.conn().then((client) => {
    return client.db('isis3710').collection('productos').insertOne(product); // Si no se provee un ID, este será generado automáticamente
  });
}

module.exports = [getProducts, insertProduct];