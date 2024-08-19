const storeSchema = require("../model/storeSchema");
const userSchema = require("../model/userSchema");

async function storeController(req, res) {
  let { name, userid } = req.body;

  let existingUser = await userSchema.findOne({ _id: userid });

  if (existingUser) {
    if (existingUser.role == "admin" || existingUser.role == "merchant") {
      try {
        let store = new storeSchema({
          name,
          userid,
        });
        await store.save();
        res.status(201).send({ message: "success", store });
      } catch (error) {
        res.status(404).send({ error: error });
      }
    } else {
      res.status(404).send({ error: "you don't access " });
    }
  } else {
    res.status(404).send({ error: "User Not found" });
  }
}

module.exports = storeController;
