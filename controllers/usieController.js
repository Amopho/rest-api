const UsiesData = require("../model/usiesModel");
const router = require("../router/usies");

const userMiddleware = require("../middleware/index");

const userController = {};

// const {
//   getAllUsies,
//   postNewUser,
//   getUser,
//   getOneEmployee,
//   updateOneEmployee,
//   deleteOneEmployee,
//   updateAllEmployeeData,
// } = require("../controllers/employeeController");

// Routers:
// landing page
// '/'

//http://localhost:5000/user -->  display all users
//CONTROLER getAllUsers
userController.getAllUsers = async (req, res) => {
  try {
    const usies = await UsiesData.find();
    res.status(200).json(usies);
  } catch {
    res.status(500).json({ message: err.message });
  }
};

// POST   http://localhost:5000/user  -->  add user to db,
// CONTROLER postNewUsie
userController.postNewUsie = async (req, res) => {
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
    res.status(201).json({ newUsie, message: "New user added" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET http://localhost:5000/user/:name -->  get usie upon name criteria, params name.
// CONTROLER getUser
// PUT http://localhost:5000/user/:name -->  update employee by name
//CONTROLER updateOneUsie

// PATCH http://localhost:5000/usies/:name -->  update some users upon the same name
//CONTROLER updateManyUsies

// DELETE http://localhost:5000/usies/:name -->  delete employee by name

// Get many employees by address
// router.get("/search/:add", getAdd, (req, res) => {
//   res.status(200).json(res.employee);
// });
// // Update many employees by Address
// router.put("/update/:add", getAdd, updateManyEmployees);

module.exports = userController;
