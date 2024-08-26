const express = require("express");
const {
  storeController,
  getAllstoreController,
} = require("../../../controller/storeController");
const router = express.Router();

router.post("/createstore", storeController);
router.get("/allstore", getAllstoreController);

module.exports = router;
