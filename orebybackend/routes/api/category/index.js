const express = require("express");
const {
  createcategoryController,
  categoryapproveController,
  categoryDeleteController,
  getAllcateogory,
  singlecategoryController,
} = require("../../../controller/categoryController");
const router = express.Router();

router.post("/createcategory", createcategoryController);
router.post("/categoryapprove", categoryapproveController);
router.post("/categorydelete", categoryDeleteController);
router.get("/allcategory", getAllcateogory);
router.get("/singlecategory/:id", singlecategoryController);

module.exports = router;
