const express = require("express");
const router = express.Router();
const app = express();
const UsiesData = require("../model/usiesModel");
const userController = require("../controllers/usieController");
const userMiddleware = require("../middleware/index");
// Routers:
// landing page
// '/'
// landing page GET all users or POST new user
// url http://localhost:5000/
//GET http://localhost:5000/usies -->  display all users, root route w/o controllers,
//CONTROLER getAllUsies
// POST   http://localhost:5000/usies  -->  add user to db,
// CONTROLER addNewUsie
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.postNewUsie);

// GET http://localhost:5000/usies/:name -->  get usie upon name criteria, params name.
// CONTROLER getUsie

//
router.route("/:name").get(userMiddleware.getUser);
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
