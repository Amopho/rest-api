const express = require("express");
const router = express.Router();
const UsiesData = require("../model/usiesModel");

router.get("/", async (req, res) => {
  try {
    const usies = await UsiesData.find();
    res.status(200).json(usies);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

// Add new, POST new employee
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

module.exports = router;
