const { EmployeeProfile } = require("../models");

class EmployeeProfileRepository {
    async create(data, options = {}) {
        return EmployeeProfile.create(data, options);
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