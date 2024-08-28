const express = require("express");

const router = express.Router();
const {
  createDiscountController,
} = require("../../../controller/discountController");

router.post("/creatediscount", createDiscountController);

module.exports = router;
