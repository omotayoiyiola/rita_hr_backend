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

exports.searchEmployeeByLevel = (req, res) => {
  const employeeBtwLevelOneAndTen = employees.filter((e) => e.level >= 1 && e.level <= 10);
  const employeeFromElevenUpwards = employees.filter((e) => e.level >= 11);
  if (!employees) {
    return res.status(404).json({ message: "No employee found" });
  }

  res.json({message_one:`Total employee found between level 1 and 10 is ${employeeBtwLevelOneAndTen.length}`,
    message_two:`Total employee found in level 11 upwards is ${employeeFromElevenUpwards.length}`});
};

exports.searchEmployeeBySalary = (req, res) => {
  if (!employees) {
    return res.status(404).json({ message: "No employee found" });
  }
  const employee = employees.filter((e) => e.department == "finance" && e.salary >= 1500 && e.name)
  .map((e) => e.name);
  
  res.json({message:"Names of employees in department of finance with salary of atleast 1,500 are:" , employee});
};
