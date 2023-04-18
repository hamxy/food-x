const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


// Routers
const indexRouter = require('./routes/products');

// Routes
// homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
})

// products
app.use('/products', indexRouter);


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
