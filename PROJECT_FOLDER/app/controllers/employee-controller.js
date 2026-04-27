const employeeService = require("../services/employee-service");
const { created, fetched } = require("../utils/success-handler");

exports.create = async (req, res, next) => {
    try {
        const result = await employeeService.createEmployee(req.body);

        return created(res, result, "Employee Created Successfully");
    } catch (error) {
        next(error);
    }
}

exports.getById = async (req, res, next) => {
    try {
        const result = await employeeService.getEmployeeById(req.params.id);

        return fetched(res, result, "Employee Fetched Successfully");
    } catch (error) {
        next(error)
    }
}

exports.updateEmployeeById = async (req, res, next) => {
    try {
        const result = await employeeService.updateEmployee(req.params.id, req.body);

        return fetched(res, result, "Employee Updated Successfully");
    } catch (error) {
        next(error);
    }
}

exports.deleteEmployeeById = async (req, res, next) => {
    try {
        const result = employeeService.deleteEmployee(req.params.id);

        return fetched(res, null, 'Employee deleted successfully');
    } catch (error) {
        next(error)
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const result = await employeeService.getEmployees(req.query);

        res.json(result);
    } catch (error) {
        next(error);
    }
}

exports.getEmployeeReport = async (req, res, next) => {
    try {
        const result = await employeeService.getEmployeeReport();

        return fetched(res, result, "Employee Report Fetch Successfully");
    } catch (error) {
        next(error);
    }
}

exports.createEmployeeWithRelation = async (req, res, next) => {
    const result = await employeeService.createEmployeeWithRelation(req.body);

    return created(res, result, "Employee, Profile, Families and Educations Created Successfully");
}

exports.updateEmployeeWithRelation = async (req, res, next) => {
    const result = await employeeService.updateEmployeeWithRelation(req.params.id, req.body);

    return fetched(res, result, "Employee, Profile, Families and Educations Updated Successfully");
}