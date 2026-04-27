const employeeRepo = require("../repositories/employee-repository");
const employeeProfileRepo = require("../repositories/employee_profile-repository");
const employeeFamilyRepo = require("../repositories/employee_family-repository");
const educationRepo = require("../repositories/education-repository");

const { sequelize } = require("../models");

class EmployeeService {
    async createEmployee(data, options = {}) {
        // const existing = await employeeRepo.findById(data.id);

        return employeeRepo.create(data, options);
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

    async createEmployeeWithRelation(payload) {
        const t = await sequelize.transaction();

        try {
            const { profile, families, educations, ...employeeData } = payload;

            const employee = await employeeRepo.create(employeeData, { transaction: t });

            if (profile) {
                await employeeProfileRepo.create({
                    ...profile,
                    employee_id: employee.id
                }, { transaction: t });
            }

            if (families?.length) {
                const familyData = families.map(f => ({
                    ...f,
                    employee_id: employee.id
                }));
                await employeeFamilyRepo.bulkCreate(familyData, { transaction: t });
            }

            if (educations?.length) {
                const educationData = educations.map(e => ({
                    ...e,
                    employee_id: employee.id
                }));
                await educationRepo.bulkCreate(educationData, { transaction: t });
            }

            await t.commit();

            return employeeRepo.findById(employee.id);
        } catch (error) {
            await t.rollback();
            throw error;
        }
    }

    async updateEmployeeWithRelation(id, payload) {
        const t = await sequelize.transaction();

        try {
            const { profile, families, educations, ...employeeData } = payload;

            await employeeRepo.update(
                id,
                employeeData,
                { transaction: t }
            );

            if (profile) {
                const existingProfile = await employeeProfileRepo.findByEmployeeId(id, { transaction: t });

                if (existingProfile) {
                    await existingProfile.update(profile, { transaction: t });
                } else {
                    await employeeProfileRepo.create({
                        ...profile,
                        employee_id: id,
                    }, { transaction: t });
                }
            }

            /**
             * Replace families data
             */
            if (families) {
                await employeeFamilyRepo.deleteByEmployeeId(
                    { employee_id: id },
                    { transaction: t }
                );

                const familyData = families.map(f => ({ ...f, employee_id: id }));
                await employeeFamilyRepo.bulkCreate(familyData, { transaction: t });
            }

            /**
             * Replace educations data
             */
            if (educations) {
                await educationRepo.deleteByEmployeeId(
                    { employee_id: id },
                    { transaction: t }
                );

                const educationData = educations.map(e => ({ ...e, employee_id: id }));
                await educationRepo.bulkCreate(educationData, { transaction: t });
            }

            await t.commit();
            return employeeRepo.findById(id);
        } catch (error) {
            await t.rollback();
            throw error;
        }
    }
}

module.exports = new EmployeeService();