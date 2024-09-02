const express = require("express");
const {
  createproductController,
  getAllProductController,
  singleProductController,
} = require("../../../controller/productController");
const cloudinary = require("cloudinary").v2;
const router = express.Router();
const path = require("path");
const multer = require("multer");
cloudinary.config({
  cloud_name: "dpzaadmcu",
  api_key: "637385924695498",
  api_secret: "wXLIDYcVFgprikOQNDHrjn1nceE", // Click 'View API Keys' above to copy your API secret
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB limit
});

router.post("/createproduct", upload.single("image"), createproductController);
router.get("/allproduct", getAllProductController);
router.get("/singleproduct/:id", singleProductController);

module.exports = router;
