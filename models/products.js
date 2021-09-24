const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{  
    type: String,
    required: true,
    unique: true
},
price:{
    type: Number,
    required: true,
    min:0,
    unique: true
},
category:{
    type: String,
    lowercase: true,
    unique: true,
    enum: ['fruit', 'vegetable', 'dairy']
}
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;