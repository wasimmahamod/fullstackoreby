const productSchema = require("../model/productSchema");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const storeSchema = require("../model/storeSchema");
const categorySchema = require("../model/categorySchema");
async function createproductController(req, res) {
  let { name, description, sellingprice, price, category, ownerId, storeid } =
    req.body;
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "productimage",
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
    await categorySchema.findOneAndUpdate(
      { _id: category },
      { $push: { product: product._id } },
      { new: true }
    );
    res.status(201).send({ message: "product created successfully", product });
  } catch (error) {
    res.status(500).json({ error: "Error uploading image to Cloudinary" });
  }
}

async function getAllProductController(req, res) {
  try {
    let allproduct = await productSchema.find({}).sort("price");

    res.status(200).send({ message: "success", allproduct });
  } catch (error) {
    res.status(404).send({ error });
  }
}

async function singleProductController(req, res) {
  let { id } = req.params;

  try {
    let findproduct = await productSchema
      .findOne({ _id: id })
      .populate("review");
    res.status(200).send({ product: findproduct });
  } catch (error) {
    res.status(404).send({ error });
  }
}

module.exports = {
  createproductController,
  getAllProductController,
  singleProductController,
};
