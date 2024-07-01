const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    phone: {
      type: String,
    },
    avatar: {
      type: String,
    },

    role: {
      type: String,
      enum: ["user", "merchant", "admin"],
      default: "user",
    },
    emailVerify: {
      type: String,
      default: false,
    },
    otp: {
      type: Number,
    },

    token: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
