const database = require('mongoose');
const databaseName = 'food-x'

database.connect(`mongodb://127.0.0.1:27017/${databaseName}`)
  .then(() => {
    console.log(`Connection with ${databaseName} open.`)
  })
  .catch(err => {
    console.log('Oh no, error!')
    console.log(err)
  })

  
  module.exports = database;