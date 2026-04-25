const express = require('express');
const app = express();

const employeeRoutes = require("./app/routes/employee-route");
console.log("employeeRoutes =", employeeRoutes);

app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});

module.exports = app;