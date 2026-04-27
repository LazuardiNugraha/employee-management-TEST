const educationRepo = require("../repositories/education-repository");

class EducationService {
    async createEducation(data) {
        // const existing = await educationRepo.findById(data.id);

        return educationRepo.create(data);
    }

    async getEducationById(id) {
        const family = await educationRepo.findById(id);
        if (!family) throw new Error("Employee Family not found");

        return family;
    }

    async updateEducation(id, data) {
        await this.getEducationById(id);

        return educationRepo.update(id, data);
    }

    async deleteEducationById(id) {
        await this.getEducationById(id);

        return educationRepo.delete(id);
    }
}

module.exports = new EducationService();