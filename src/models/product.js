const mongoose = require('../config/databaseConfig');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        required: true,
        enum: ['fruit-veg', 'dairy', 'cereals', 'meat', 'fat', 'snack', 'condiments']
    },
    barcode: {
        type: Number,
        required: false
    },
    kcal: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    proteins: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;