const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number

});

const ProductCart = mongoose.model("ProductCart",ProductCartSchema);

const orderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: {type: String},
    updated: {type: Date},
    user: {
        type: ObjectId,
        ref: "User"
    }

},
{timestamp: true}
);

const Order = mongoose.model("Order",orderSchema);

module.exports = {Order,ProductCart};