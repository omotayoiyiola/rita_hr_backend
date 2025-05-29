const express = require("express");
const {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeesStartingWithA,
  getEmployeesWithHighSalary,
  searchEmployeesByName,
  deleteEmployeesByDepartment,
} = require("../controllers/employee");
const router = express.Router();

router.get("/", getEmployees);
router.post("/", createEmployee);
//router.get("/:id", getEmployee);
//router.get("/:name", getEmployee);
router.get("/:level", getEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
// Israel routes
router.get("/filter/name-starts-with-a", getEmployeesStartingWithA);
router.get("/filter/salary-at-least-2000", getEmployeesWithHighSalary);
// Louise routes
router.delete("/department/:department", deleteEmployeesByDepartment);
router.get("/search/by-name", searchEmployeesByName);

module.exports = router;
