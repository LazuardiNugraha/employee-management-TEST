const { Employee, EmployeeProfile, EmployeeFamily, Education } = require("../models");

class EmployeeRepository {
    async create(data) {
        return Employee.create(data);
    }

    async findById(id) {
        const employee = await Employee.findByPk(id, {
            subQuery: false,
            include: [
                {
                    model: EmployeeProfile,
                    as: 'profile',
                    attributes: { exclude: ['created_at', 'updated_at'] }
                },
                {
                    model: EmployeeFamily,
                    as: 'families',
                    attributes: { exclude: ['created_at', 'updated_at'] }
                },
                {
                    model: Education,
                    as: 'educations',
                    attributes: { exclude: ['created_at', 'updated_at'] }
                },
            ]
        });

        if (!employee) throw new Error('Employee not found');

        return employee;
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

    async findAll({ page, limit }) {
        const offset = (page - 1) * limit;

        return Employee.findAndCountAll({
          limit,
          offset,
          subQuery: false,
          distinct: true,
          include: [
            {
              model: EmployeeProfile,
              as: 'profile',
              attributes: { exclude: ['created_at', 'updated_at'] },
            },
            {
              model: EmployeeFamily,
              as: 'families',
              attributes: { exclude: ['created_at', 'updated_at'] },
            },
            {
              model: Education,
              as: 'educations',
              attributes: { exclude: ['created_at', 'updated_at'] },
            },
          ],
        });
    }
}

module.exports = new EmployeeRepository();