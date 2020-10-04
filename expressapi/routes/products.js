var express = require('express');
var router = express.Router();
var [getProducts, insertProduct] = require('../controllers/products');

/* GET product listing. */
router.get('/', async function (req, res, next) {
  const products = await getProducts();
  res.send(products);
});
/**
 * POST product
 */
router.post('/', async function (req, res, next) {
  const newProduct = await insertProduct(req.body);
  res.send(newProduct);
});

module.exports = router; 