var express = require('express');
const Product = require('../models/product');
var router = express.Router();

// Display all products / index
router.get('/', async (req, res) => {
  const products = await Product.find({})
  console.log(products)
  res.render('products/products', { products, title: 'Products' })
})

// Add new product into database
router.get('/new', (req, res) => {
  res.render('products/new', {title: 'New product'})
})

module.exports = router;
