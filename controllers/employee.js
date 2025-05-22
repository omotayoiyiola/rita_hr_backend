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

//Israel- Get employees whose names start with "A"
exports.getEmployeesStartingWithA = (req, res) => {
  const result = employees.filter(emp => emp.name.startsWith("A"));
  res.json(result);
};

//Israel- Get employees with salary >= 2000
exports.getEmployeesWithHighSalary = (req, res) => {
  const result = employees.filter(emp => emp.salary >= 2000);
  res.json(result);
};