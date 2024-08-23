const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        imageUrl:  {type: String, required: true},
        inStock:  {type: Number, required: true},
        title:  {type: String, required: true},
        description:  {type: String, required: true},
        price:  {type: Number, required: true},
})

const Product = mongoose.model("product", productSchema)

module.exports = Product;