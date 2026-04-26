const EmployeeFamily = require("../models/employee_family-model");

class EmployeeFamilyRepository {
    async create(data) {
        return EmployeeFamily.create(data);
    }

    async findById(id) {
        return EmployeeFamily.findByPk(id);
    }

    async update(id, data) {
        await EmployeeFamily.update(data, { where: {id} });
        return this.findById(id);
    }

    async delete(id) {
        return EmployeeFamily.destroy({ where: {id} });
    }
}

module.exports = new EmployeeFamilyRepository();