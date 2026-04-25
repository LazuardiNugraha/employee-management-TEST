const employeeService = require("../services/employee-service");

exports.create = async (req, res, next) => {
    try {
        const result = await employeeService.createEmployee(req.body);

        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

exports.getById = async (req, res, next) => {
    try {
        const result = await employeeService.getEmployeeById(req.params.id);

        res.json(result);
    } catch (error) {
        next(error)
    }
}

exports.updateEmployeeById = async (req, res, next) => {
    try {
        const result = await employeeService.updateEmployee(req.params.id, req.body);

        res.json(result);
    } catch (error) {
        next(error);
    }
}

exports.deleteEmployeeById = async (req, res, next) => {
    try {
        const result = employeeService.deleteEmployee(req.params.id);

        res.json({ message: "Employee deleted successfully"});
    } catch (error) {
        next(error)
    }
}