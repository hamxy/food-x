var express = require('express');
var router = express.Router();


// Routes
// homepage
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
  })

// Daklas stream
router.get('/daklas', (req, res) => {
    res.render('daklas', { title: 'Daklas' })
  })


module.exports = router;