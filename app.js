const express = require("express");
const app = express();
const morgan = require("morgan");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());

// monogDB
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connected with database"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
// http://localhost:5000/usies
const usies = require("./router/usies");
app.use("/usies", usies);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our app");
});

module.exports = app;
