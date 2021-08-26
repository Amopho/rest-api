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

module.exports = router;
