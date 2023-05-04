const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser')


const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');


// Routes
// homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
})


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));


// Use routers
app.use('/', indexRouter);
app.use('/products', productRouter);


// Listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
