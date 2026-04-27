const employeeRepo = require("../repositories/employee-repository");

class EmployeeService {
    async createEmployee(data) {
        const existing = await employeeRepo.findById(data.id);
        // if (existing) throw new Error("Data pegawai sudah ")

        return employeeRepo.create(data);
    }

    async getEmployeeById(id) {
        return await employeeRepo.findById(id);
    }

    async updateEmployee(id, data) {
        await this.getEmployeeById(id);

        return employeeRepo.update(id, data);
    }

    async deleteEmployee(id) {
        await this.getEmployeeById(id);

        return employeeRepo.delete(id);
    }
}

module.exports = new EmployeeService();