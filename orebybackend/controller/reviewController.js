const productSchema = require("../model/productSchema");
const reviewSchema = require("../model/reviewSchema");

async function submitReviewController(req, res) {
  let { product, reviewBy, massage, rating } = req.body;
  try {
    const review = new reviewSchema({
      product,
      reviewBy,
      massage,
      rating,
    });

    await review.save();

    const updateProduct = await productSchema.findOneAndUpdate(
      {
        _id: product,
      },
      { $set: { review: review._id } },
      { new: true }
    );

    res.status(200).send({ review });
  } catch (error) {
    res.status(404).send({ error });
  }
}

async function getReviewController(req, res) {
  try {
    let getreview = await reviewSchema.find({});

    res.status(200).send({ review: getreview });
  } catch (error) {
    res.status(404).send({ error });
  }
}

module.exports = { submitReviewController, getReviewController };
