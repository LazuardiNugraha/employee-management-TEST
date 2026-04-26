const employeeFamilyService = require("../services/employee_family-service");
const { created, fetched } = require("../utils/success-handler");

exports.create = async (req, res, next) => {
    try {
        const result = await employeeFamilyService.createEmployeeFamily(req.body);

        return created(res, result, "Employee Family Created Successfully");
    } catch (error) {
        next(error);
    }
}

exports.getById = async (req, res, next) => {
    try {
        const result = await employeeFamilyService.getEmployeeFamilyById(req.params.id);

        return fetched(res, result, "Employee Family Fetched Successfully");
    } catch (error) {
        next(error);
    }
}

exports.updateEmployeeFamilyById = async (req, res, next) => {
    try {
        const result = await employeeFamilyService.updateEmployeeFamily(req.params.id, req.body);

        return fetched(res, result, "Employee Family Updated");
    } catch (error) {
        next(error);
    }
}

exports.deleteEmployeeFamilyById = async (req, res, next) => {
    try {
        const result = employeeFamilyService.deleteEmployeProfileById(req.params.id);

        return fetched(res, null, "Employee Family Deleted Successfully");
    } catch (error) {
        next(error);
    }
}