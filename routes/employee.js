const express = require("express");
const {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeesStartingWithA,
  getEmployeesWithHighSalary,
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

module.exports = router;
