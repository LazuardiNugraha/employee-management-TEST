const { deleteEmployeProfileById } = require("../controllers/employee_profile-controller");
const employeeFamilyRepo = require("../repositories/employee_family-repository");

class EmployeeFamilyService {
    async createEmployeeFamily(data) {
        // const existing = await employeeFamilyRepo.findById(data.id);

        return employeeFamilyRepo.create(data);
    }

    async getEmployeeFamilyById(id) {
        const family = await employeeFamilyRepo.findById(id);
        if (!family) throw new Error("Employee Family not found");

        return family;
    }

    async updateEmployeeFamily(id, data) {
        await this.getEmployeeFamilyById(id);

        return employeeFamilyRepo.update(id, data);
    }

    async deleteEmployeeFamilyById(id) {
        await this.getEmployeeFamilyById(id);

        return employeeFamilyRepo.delete(id);
    }
}

module.exports = new EmployeeFamilyService();