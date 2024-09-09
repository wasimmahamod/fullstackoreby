const express = require("express");
const {
  addCartController,
  getCartController,
} = require("../../../controller/cartController");
const router = express.Router();

router.post("/addcart", addCartController);
router.get("/getcart", getCartController);
router.post("/testcart", (req, res) => {
  res.send(req.query);
});

module.exports = router;
