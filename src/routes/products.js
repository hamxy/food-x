var express = require('express');
const Product = require('../models/product');
var router = express.Router();


// Display all products
router.get('/', async (req, res) => {
  const products = await Product.find({})
  console.log(products)
  res.render('products/products', { products, title: 'Products' })
})


// Add new product into database
// Display a form
router.get('/new', (req, res) => {
  res.render('products/new', {title: 'New product'})
})

// Display a single product
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
  console.log(product)
  res.render('products/singleProduct', { product, title: `${product.name}`})
})

// Save product
router.post('/', async (req, res) =>{
  console.log(req.body);
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect('/products')
})



module.exports = router;
