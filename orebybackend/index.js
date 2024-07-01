const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
require("dotenv").config();
var cors = require("cors");
dbConfig();

app.use(cors());
const routes = require("./routes");
app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(process.env.SERVERPORT, () => {
  console.log(`server is running port number ${process.env.SERVERPORT} `);
});
