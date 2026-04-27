const employeeRepo = require("../repositories/employee-repository");

class EmployeeService {
    async createEmployee(data) {
        const existing = await employeeRepo.findById(data.id);

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

    async getEmployees(query) {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;

        const result = await employeeRepo.findAll({
            page, limit
        });

        return {
            total: result.count,
            page,
            totalPages: Math.ceil(result.count / limit),
            data: result.rows
        };
    }

    async getEmployeeReport() {
        const data = await employeeRepo.getReport();

        return data;
    }
}

module.exports = new EmployeeService();