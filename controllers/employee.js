const Employee = require("../model/employee");

exports.getEmployees = async (req, res) => {
  try {
    const result = await Employee.find();
    res.status(200).json(result);
  } catch (error) {
    console.log("Error fetching employee:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = {
      id: req.body.id,
      name: req.body.name,
      department: req.body.department,
      level: req.body.level,
      salary: req.body.salary,
    };

    const employee = new Employee(newEmployee);

    const result = await employee.save();
    res.status(201).json(result);
  } catch (error) {
    console.log("Error adding employee:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    //const employeeName = req.params.name;
    // const employeeId = req.params.id;
    const employeeLevel = req.params.level;
    const result = await Employee.find({ level: employeeLevel });
    // const result = await Employee.findById(employeeId);
    res.status(200).json(result);
  } catch (error) {
    console.log("Error adding employee:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const { name, department, level, salary } = req.body;

    const result = await Employee.findByIdAndUpdate(
      employeeId,
      {
        name,
        department,
        level,
        salary,
      },
      {
        new: true,
      }
    );

    res.status(200).json(result);
  } catch (error) {
    console.log("Error adding employee:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    await Employee.findByIdAndDelete(employeeId);
    res.status(200).json({ message: "Employee record deleted successfully" });
  } catch (error) {
    console.log("Error adding employee:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEmployee22 = (req, res) => {
  employees = employees.filter((e) => e.id != req.params.id);
  res.json({ message: "Employee deleted successfully" });
};

//Israel- Get employees whose names start with "A"
exports.getEmployeesStartingWithA = (req, res) => {
  const result = employees.filter((emp) => emp.name.startsWith("A"));
  res.json(result);
};

//Israel- Get employees with salary >= 2000
exports.getEmployeesWithHighSalary = (req, res) => {
  const result = employees.filter((emp) => emp.salary >= 2000);
  res.json(result);
};
///Louise_Search employees by name keyword(case-insensitive)

exports.searchEmployeesByName = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const result = await Employee.find({
      name: { $regex: keyword, $options: "i" },
    });
    res.status(200).json(result);
  } catch (error) {
    console.log("Error searching employee by name:", error);
    res.status(500).json({ error: error.message });
  }
};
///Louise_Deleteall employees in a specific department

exports.deleteEmployeesByDepartment = async (req, res) => {
  try {
    const department = req.params.department;
    const result = await Employee.deleteMany({ department });
    res.status(200).json({
      message: `All employees in ${department} department deleted`,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.log("Error deleting employees by department:", error);
    res.status(500).json({ error: error.message });
  }
};
