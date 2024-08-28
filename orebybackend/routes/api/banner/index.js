const express = require("express");
const {
  createBannerController,
  getBannerImage,
} = require("../../../controller/bannerController");
const router = express.Router();

const cloudinary = require("cloudinary").v2;
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

router.post(
  "/createbannerImage",
  upload.single("image"),
  createBannerController
);
router.get("/bannerImages", getBannerImage);

module.exports = router;
