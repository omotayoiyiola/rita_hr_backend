const express = require("express");
const {
  getEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployeeByLevel,
} = require("../controllers/employee");
const router = express.Router();

router.get("/", getEmployees);
router.post("/", createEmployee);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.get("/filter/search_employee_by_level", searchEmployeeByLevel);

module.exports = router;
