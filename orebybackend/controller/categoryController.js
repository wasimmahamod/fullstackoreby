const categorySchema = require("../model/categorySchema");
const userSchema = require("../model/userSchema");

async function createcategoryController(req, res) {
  let { name, description } = req.body;

  try {
    let existingCategory = await categorySchema.find({ name });
    if (existingCategory.length > 0) {
      res.status(404).send({ error: "category name is already exist" });
    } else {
      let category = new categorySchema({
        name,
        description,
      });

      await category.save();

      res.status(201).send(category);
    }
  } catch (error) {
    return res.status(404).send(error);
  }
}

async function categoryapproveController(req, res) {
  let { email, category } = req.body;

  try {
    let user = await userSchema.findOne({ email });

    if (user) {
      if (user.role == "admin") {
        let categorydata = await categorySchema.findOneAndUpdate(
          { _id: category },
          { isActive: true },
          { new: true }
        );
        res.status(201).send({ success: "Category approved", categorydata });
      } else {
        return res
          .status(404)
          .send({ error: "Only admin approve this category " });
      }
    } else {
      return res.status(404).send({ error: "user not found " });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function categoryDeleteController(req, res) {
  let { email, category } = req.body;

  try {
    let user = await userSchema.findOne({ email });

    if (user) {
      if (user.role == "admin") {
        let categorydata = await categorySchema.findOneAndDelete(
          { _id: category },
          { new: true }
        );
        res.status(201).send({ success: "category delete ", categorydata });
      } else {
        return res
          .status(404)
          .send({ error: "Only admin approve this category " });
      }
    } else {
      return res.status(404).send({ error: "user not found " });
    }
  } catch (error) {
    return res.status(404).send({ error: error });
  }
}

async function getAllcateogory(req, res) {
  try {
    let category = await categorySchema.find({});

    res.status(201).send({ category });
  } catch (error) {
    res.status(404).send({ error: error });
  }
}
async function singlecategoryController(req, res) {
  let { id } = req.params;

  try {
    let category = await categorySchema.findOne({ _id: id });
    res.status(201).send(category);
  } catch (error) {
    res.status(404).send({ error: error });
  }
}

module.exports = {
  createcategoryController,
  categoryapproveController,
  categoryDeleteController,
  getAllcateogory,
  singlecategoryController,
};
