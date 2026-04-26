const EmployeeProfile = require("../models/employee_profile-model");

class EmployeeProfileRepository {
    async create(data) {
        return EmployeeProfile.create(data);
    }

    async findById(id) {
        return EmployeeProfile.findByPk(id);
    }

    // async findByEmployeId(employeeId) {
    //     return EmployeeProfile.findByEmployeId(employeeId);
    // }

    async update(id, data) {
        await EmployeeProfile.update(data, { where: {id} });
        return this.findById(id);
    }

    async delete(id) {
        return EmployeeProfile.destroy({ where: {id} });
    }
}

module.exports = new EmployeeProfileRepository();