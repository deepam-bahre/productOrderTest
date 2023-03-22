const mongoose = require("mongoose");

const productSchema = mongoose.Schema({

    "productName": String,
    "description": String,
    "price": Number,
    "quantity": Number,
    "category": String,
    "Discount": mongoose.Schema.Types.Mixed,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;