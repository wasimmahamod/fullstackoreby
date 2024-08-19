const productSchema = require("../model/productSchema");

async function createproductController(req, res) {
  //   let { name, description, image, sellingprice, price, category, ownerId } =
  //     req.body;
  console.log(req.body);
  console.log(req.file);
  res.send(req.body);

  return;
  try {
    let product = new productSchema({
      name,
      description,
      image,
      category,
      ownerId,
      sellingprice,
      price,
    });
    await product.save();

    res.status(201).send(product);
  } catch (error) {
    return res.status(404).send(error);
  }
}

module.exports = createproductController;
