const express = require("express");
const router = express.Router();
const UsiesData = require("../model/usiesModel");

// GET all users
// url http://localhost:5000/usies
router.get("/", async (req, res) => {
  try {
    const usies = await UsiesData.find();
    res.status(200).json(usies);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

// Add new, POST new user
// POST http://localhost:5000/usies/
router.post("/", async (req, res) => {
  const usie = new UsiesData({
    userName: req.body.userName,
    userPass: req.body.userPass,
    age: req.body.age,
    fbw: req.body.fbw,
    toolStack: req.body.toolStack,
    email: req.body.email,
  });
  try {
    const newUsie = await usie.save();
    console.log(newUsie);
    res.status(201).json(newUsie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// A PUT request endpoint at /user/:name to update user from DB upon their name
// http://localhost:5000/employees/:name

// // Update employees by name
// PUT http://localhost:5000/employees/:name -->  update employee by name
// router.put("/update/:add", getAdd, updateManyEmployees);

// Get many employees by address
// router.get("/search/:add", getAdd, (req, res) => {
//   res.status(200).json(res.employee);
// });

module.exports = router;
