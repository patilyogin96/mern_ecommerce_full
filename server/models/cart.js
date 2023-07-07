const mongoose = require("mongoose");

// there shall be cartitem and cart

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
  costPrice: {
    type: Number,
    default: 0,
  },
  tax: {
    type: Number,
    default: 0,
  },
  priceWithTax: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "Not Processed",
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);
module.exports = CartItem;

// Cart Schema
const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
