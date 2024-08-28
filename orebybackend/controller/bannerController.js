const bannerSchema = require("../model/bannerSchema");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
async function createBannerController(req, res) {
  try {
    let bannerImages = await bannerSchema.find({});

    if (bannerImages.length < 2) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "productimage",
      });

      let bannerImage = new bannerSchema({
        image: result.secure_url,
      });
      await bannerImage.save();

      fs.unlink(req.file.path, () => {
        console.log("image deleted successfull");
      });
      res.send({ bannerImage });
    } else {
      res.send("less then 3 image accept");
    }
  } catch (error) {
    res.send({ error });
  }
}

async function getBannerImage(req, res) {
  try {
    let bannerimages = await bannerSchema.find({});
    res.send({ images: bannerimages });
  } catch (error) {
    res.send({ error });
  }
}

module.exports = { createBannerController, getBannerImage };
