let employees = require("../mock/employees");

exports.getEmployees = (req, res) => {
  res.json(employees);
};

exports.createEmployee = (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    department: req.body.department,
    level: req.body.level,
    salary: req.body.salary,
  };

  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

exports.getEmployee = (req, res) => {
  const employee = employees.find((e) => e.id == req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "The employee id does not exist" });
  }

  res.json(employee);
};

exports.updateEmployee = (req, res) => {
  const employee = employees.find((e) => e.id == req.params.id);
  if (!employee) {
    return res.status(404).json({ message: "The employee id does not exist" });
  }

  employee.name = req.body.name || employee.name;
  employee.department = req.body.department || employee.department;
  employee.level = req.body.level || employee.level;
  employee.salary = req.body.salary || employee.salary;

  res.json({ employee, message: "Employee modified successfully" });
};

exports.deleteEmployee = (req, res) => {
  employees = employees.filter((e) => e.id != req.params.id);
  res.json({ message: "Employee deleted successfully" });
};
/// Louisa_Search Employees by Name Keyword
exports.searchEmployeesByName = (req, res) => {
  const keyword = req.query.keyword?.toLowerCase() || "";
  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(keyword)
  );
  res.json(filtered);
};
/// Louisa_Deleting the employees in a specific department
exports.deleteEmployeesByDepartment = (req, res) => {
  const dept = req.params.department;
  if (!dept) return res.status(400).json({ message: "Department not foumd!" });
  const initialCount = employees.length;
  employees = employees.filter((e) => e.department !== dept);
  const deletedCount = initialCount - employees.length;
  res.json({
    message: `Deleted ${deletedCount}employees from  ${dept} department`,
  });
};
