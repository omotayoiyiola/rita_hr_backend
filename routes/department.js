const express = require("express");
const {
  getDepartmentsWithStaffCount
} = require("../controllers/department");
const router = express.Router();

router.get("/", getDepartmentsWithStaffCount);

module.exports = router;
