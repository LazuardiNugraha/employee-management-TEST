const Employee = require("../models/employee-model");

class EmployeeRepository {
    async create(data) {
        return Employee.create(data);
    }

    async findById(id) {
        return Employee.findByPk(id);
    }

    // async findByNik(nik) {
    //     return Employee.findByNik(nik);
    // }

    async update(id, data) {
        await Employee.update(data, { where: {id} });
        return this.findById(id);
    }

    async delete(id) {
        return Employee.destroy({ where: {id} });
    }
}

module.exports = new EmployeeRepository();