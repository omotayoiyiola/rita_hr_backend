const express = require("express");
const {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  deleteEmployeesByDepartment,
  searchEmployeesByName,
} = require("../controllers/employee");
const router = express.Router();

router.get("/", getEmployees);
router.post("/", createEmployee);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

///Louisa's_Endpoints
router.get("/search", searchEmployeesByName);
router.delete("/department/:department", deleteEmployeesByDepartment);
module.exports = router;
