const express = require("express");
const router = express.Router();
const app = express();
const UsiesData = require("../model/usiesModel");
const userController = require("../controllers/usieController");

// Routers:
// landing page
// '/'
// landing page GET all users or POST new user
// url http://localhost:5000/
//GET http://localhost:5000/usies -->  display all users, root route w/o controllers,
//CONTROLER getAllUsies
router.route("/").get(userController.getAllUsers);

// POST   http://localhost:5000/usies  -->  add user to db,
// CONTROLER addNewUsie
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

// GET http://localhost:5000/usies/:name -->  get usie upon name criteria, params name.
// CONTROLER getUsie
//
//
//
// router.get("/:name", getUsie, (req, res) => {
//   res.status(200).json(res.usie);
// });

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
