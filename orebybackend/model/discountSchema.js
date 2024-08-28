const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var discountSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
});

//Export the model
module.exports = mongoose.model("Discount", discountSchema);
