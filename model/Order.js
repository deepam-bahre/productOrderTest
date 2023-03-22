const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({

    "productName": String,
    "description": String,
    "price": Number,
    "SKU": Number,
    "category": String,
    "Discount": mongoose.Schema.Types.Mixed,
    "NetPrice": mongoose.Schema.Types.Mixed,
    "tax": mongoose.Schema.Types.Mixed,
    "shippingType": String,
    "shippingCharges": mongoose.Schema.Types.Mixed,
    "totalAmount": mongoose.Schema.Types.Mixed,
    "estimatedDelivery": datetime
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;