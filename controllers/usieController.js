const UsiesData = require("../model/usiesModel");

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

//http://localhost:5000/user -->  display all users, root route w/o controllers,
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
// CONTROLER addNewUsie

// GET http://localhost:5000/user/:name -->  get usie upon name criteria, params name.
// CONTROLER getUsie

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
