const express = require('express');
const app = express();

const employeeRoutes = require("./app/routes/employee-route");
const employeeProfileRoutes = require("./app/routes/employee_profile-route");

const errorHandler = require("./app/utils/error-handler");

app.use(express.json());

app.use("/api/employees", employeeRoutes);
app.use("/api/employee-profiles", employeeProfileRoutes);

app.use(errorHandler);

module.exports = app;