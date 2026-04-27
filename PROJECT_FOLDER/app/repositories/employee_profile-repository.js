const { EmployeeProfile } = require("../models");

class EmployeeProfileRepository {
    async create(data, options = {}) {
        return EmployeeProfile.create(data, options);
    }

    async findById(id, options = {}) {
        return EmployeeProfile.findByPk(id, options);
    }

    async findByEmployeeId(employeeId, options = {}) {
        return EmployeeProfile.findOne({
          where: { employee_id: employeeId },
          ...options
        });
    }

    async update(id, data) {
        await EmployeeProfile.update(data, { where: {id} });
        return this.findById(id);
    }

    async delete(id) {
        return EmployeeProfile.destroy({ where: {id} });
    }
}

module.exports = new EmployeeProfileRepository();