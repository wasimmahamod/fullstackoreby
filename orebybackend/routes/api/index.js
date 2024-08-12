const express = require("express");
const router = express.Router();
const auth = require("./auth");
const category = require("./category");
const product = require("./product");
router.use("/auth", auth);
router.use("/category", category);
router.use("/product", product);

module.exports = router;
