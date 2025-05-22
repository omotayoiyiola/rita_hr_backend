const express = require("express");
const cors = require("cors");
const employee_routes = require("./routes/employee.js");

const app = express();
const PORT = 3300;

// Enable CORS so frontend can make requests
app.use(cors());

//  Middleware to parse JSON
app.use(express.json());

//  Root route
app.get("/", (req, res) => {
  res.send("The HURIS server is working");
});

//  Employee API routes
app.use("/api/employees", employee_routes);

//  Start server
app.listen(PORT, () => {
  console.log(`Server is running perfectly on port ${PORT}`);
});
