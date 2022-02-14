require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect(() => {
  console.log("database connected!");
});


app.listen(PORT, () => {
  console.log(`app listens on port ${PORT}`);
});