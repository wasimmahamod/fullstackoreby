const express = require("express");
const {
  submitReviewController,
  getReviewController,
} = require("../../../controller/reviewController");
const router = express.Router();

router.post("/submitreview", submitReviewController);
router.get("/getreview", getReviewController);

module.exports = router;
