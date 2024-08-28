const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  product: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
  isActive: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
