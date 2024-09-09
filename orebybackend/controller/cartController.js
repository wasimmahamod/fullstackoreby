const cartSchema = require("../model/cartSchema");

async function addCartController(req, res) {
  const { productid, ownerId, quntity } = req.body;

  try {
    const existingProduct = await cartSchema.findOne({ productid: productid });

    if (existingProduct) {
      let updatecart = await cartSchema.findOneAndUpdate(
        { productid: productid },
        { quntity: quntity + 1 },
        { new: true }
      );
      res.status(201).send({ cart: updatecart, message: "quntity update  " });
    } else {
      let addtocart = new cartSchema({
        productid,
        ownerId,
        quntity,
      });
      await addtocart.save();
      res.status(201).send({ cart: addtocart, message: "product added " });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
}
async function getCartController(req, res) {
  try {
    let getcart = await cartSchema.find({}).populate("productid");
    res.status(200).send(getcart);
  } catch (error) {
    res.status(400).send({ error });
  }
}
module.exports = { addCartController, getCartController };
