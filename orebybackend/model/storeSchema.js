const { default: mongoose } = require("mongoose");

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    userid: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    productid: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Store", storeSchema);
