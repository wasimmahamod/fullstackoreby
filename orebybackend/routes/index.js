const express = require("express");
const router = express.Router();
const api = require("./api");

const apiroutes = process.env.APIROUTES;

router.use(apiroutes, api);
router.use(apiroutes, (req, res) => {
  res.send({ error: "No api found in this route " });
});

module.exports = router;
