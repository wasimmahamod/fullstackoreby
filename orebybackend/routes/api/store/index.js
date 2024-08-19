const express = require("express");
const storeController = require("../../../controller/storeController");
const router = express.Router();

router.post("/createstore", storeController);

module.exports = router;
