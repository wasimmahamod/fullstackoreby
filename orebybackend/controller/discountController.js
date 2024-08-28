const categorySchema = require("../model/categorySchema");
const discountSchema = require("../model/discountSchema");
const userSchema = require("../model/userSchema");

async function createDiscountController(req, res) {
  let { amount, user, category } = req.body;
  try {
    let existingUser = await userSchema.findOne({ _id: user });
    if (existingUser.role == "admin" || existingUser.role == "merchant") {
      let createDiscount = new discountSchema({
        amount,
        user,
        category,
      });
      await createDiscount.save();
      await categorySchema.findOneAndUpdate(
        { _id: category },
        { $set: { discount: amount } },
        { new: true }
      );

      res.status(200).send({ discount: createDiscount });
    } else {
      res.status(404).send("don't access");
    }
  } catch (error) {
    res.status(500).send({ error });
  }
}

module.exports = { createDiscountController };
