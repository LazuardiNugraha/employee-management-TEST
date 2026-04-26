const employeeProfileService = require("../services/employee_profile-service");
const { created, fetched } = require("../utils/success-handler");

exports.create = async (req, res, next) => {
    try {
        const result = await employeeProfileService.createEmployeeProfile(req.body);

        return created(res, result, "Employee Profile Created Successfully");
    } catch (error) {
        next(error)
    }
}

exports.getById = async (req, res, next) => {
    try {
        const result = await employeeProfileService.getEmployeeProfileById(req.params.id);

        return fetched(res, result, "Employee Profile Fetched Succcessfully");
    } catch (error) {
        next(error)
    }
}

exports.updateEmployeeProfileById = async (req, res, next) => {
    try {
        const result = await employeeProfileService.updateEmployeeProfile(req.params.id, req.body);

        return fetched(res, result, "Employee Profile Updated");
    } catch (error) {
        next(error)
    }
}

exports.deleteEmployeProfileById = async (req, res, next) => {
    try {
        const result = employeeProfileService.deleteEmployeeProfile(req.params.id);

        return fetched(res, null, "Employee Deleted Successfully");
    } catch (error) {
        next(error)
    }
}