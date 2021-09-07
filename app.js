// REQUIRE
//
const express = require("express");
const app = express();
const morgan = require("morgan");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());
// basic routes
// http://localhost:5000/user
// http://localhost:5000/display
const routerForUsies = require("./router/usies");
const routerForDisplay = require("./router/display");
app.use("/user", routerForUsies);
app.use("/display", routerForDisplay);
//
// Connect to monogDB database
//
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connected with database"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

//
// Define a landing page on localhost 5000
//
app.get("/", (req, res) => {
  res.status(200).send("Welcome to our app");
});

module.exports = app;
