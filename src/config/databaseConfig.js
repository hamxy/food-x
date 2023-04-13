const database = require('mongoose');


database.connect('mongodb://127.0.0.1:27017/farmStand')
  .then(() => {
    console.log('Connection open')
  })
  .catch(err => {
    console.log('Oh no, error!')
    console.log(err)
  })

  
  module.exports = database;