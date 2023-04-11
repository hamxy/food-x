var express = require('express');
const Product = require('../models/product');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', async (req, res) => {
  const products = await Product.find({})
  console.log(products)
  res.render('products', { products, title: 'Products' })
})

module.exports = router;
