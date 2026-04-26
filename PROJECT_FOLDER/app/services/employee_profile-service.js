const employeeProfileRepo = require("../repositories/employee_profile-repository");
const { deleteEmployee } = require("./employee-service");

class EmployeeProfileService {
    async createEmployeeProfile(data) {
        const existing = await employeeProfileRepo.findById(data.id);

        return employeeProfileRepo.create(data);
    }

    async getEmployeeProfileById(id) {
        const profile = await employeeProfileRepo.findById(id);
        if (!profile) throw new Error("Employee Profile not found");

        return profile;
    }

    async updateEmployeeProfile(id, data) {
        await this.getEmployeeProfileById(id);

        return employeeProfileRepo.update(id, data);
    }

    async deleteEmployeeProfile(id) {
        await this.getEmployeeProfileById(id);

        return employeeProfileRepo.delete(id);
    }
}

module.exports = new EmployeeProfileService();