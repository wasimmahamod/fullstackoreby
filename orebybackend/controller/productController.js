const productSchema = require("../model/productSchema");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const storeSchema = require("../model/storeSchema");
async function createproductController(req, res) {
  let { name, description, sellingprice, price, category, ownerId, storeid } =
    req.body;
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "folder_name",
    });

    fs.unlink(req.file.path, () => {
      console.log("image deleted successfull");
    });

    let product = new productSchema({
      name,
      description,
      image: result.secure_url,
      category,
      ownerId,
      sellingprice,
      price,
      storeid,
    });
    await product.save();

    await storeSchema.findOneAndUpdate(
      { _id: storeid },
      { $push: { productid: product._id } },
      { new: true }
    );
    res.status(201).send({ message: "product created successfully", product });
  } catch (error) {
    res.status(500).json({ error: "Error uploading image to Cloudinary" });
  }
}

module.exports = createproductController;
