const express = require("express");
const UsiesData = require("../model/usiesModel");

// const {
//   getEmployee,
//   getAllUsies,
//   getAdd,
//   addNewEmployee,
//   getOneEmployee,
//   updateOneEmployee,
//   deleteOneEmployee,
//   updateAllEmployeeData,
// } = require("../controllers/employeeController");
// http://localhost:5000/usies -->  get all users, root route w/o controllers, getAllUsies
// POST   http://localhost:5000/usies  -->  add user, addNewEmployee
//

// GET http://localhost:3000/employees/:name -->  get employee by name
// PATCH http://localhost:3000/employees/:name -->  update employee by name
// DELETE http://localhost:3000/employees/:name -->  delete employee by name
// UPDATE aka PUT http://localhost:3000/employees/:name -->  update employee by name

// Get many employees by address
// router.get("/search/:add", getAdd, (req, res) => {
//   res.status(200).json(res.employee);
// });
// // Update many employees by Address
// router.put("/update/:add", getAdd, updateManyEmployees);
