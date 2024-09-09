const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  ownerId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  quntity: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
