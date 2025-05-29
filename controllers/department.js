let employees = require("../mock/employees");


exports.getDepartmentsWithStaffCount = (req, res) => {
  const departmentCount = {};

  for (let i = 0; i < employees.length; i++) {
    const department = employees[i].department;

    if (departmentCount[department]) {
      departmentCount[department] += 1;
    } else {
      departmentCount[department] = 1;
    }
  }

  const result = [];

  for (let department in departmentCount) {
    result.push({
      department: department,
      staffCount: departmentCount[department],
    });
  }

  res.json(result);
};