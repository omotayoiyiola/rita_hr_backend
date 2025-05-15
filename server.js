const express = require("express");
const app = express();
const employee_routes = require("./routes/employee.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("The HURIS server is working");
});

app.use("/api/employees", employee_routes);

const PORT = 3300;

app.listen(PORT, () =>
  console.log(`Server is running perfectly on port ${PORT}`)
);
