const { Employee, EmployeeProfile, EmployeeFamily, Education, sequelize } = require("../models");

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

    async getReport() {
        const query = `
            SELECT
            emp.id,
            emp.nik,
            emp.name,
            emp.is_active,
            emp_prf.gender,

            CASE
                WHEN emp_prf.date_of_birth IS NOT NULL
                THEN DATE_PART('year', AGE(NOW(), emp_prf.date_of_birth))::int || ' Years Old'
            END AS age,

            ed.name AS school_name,
            ed.level,

            COALESCE(fm.family_summary, '-') AS family_data
            FROM public.employee emp
            JOIN public.employee_profile emp_prf
            ON emp.id = emp_prf.employee_id

            JOIN public.education ed
            ON emp.id = ed.employee_id

            LEFT JOIN (
                SELECT
                    employee_id,

                    CONCAT(
                        COUNT(*) FILTER (WHERE relation_status = 'Istri'),
                        ' Istri & ',
                        COUNT(*) FILTER (WHERE relation_status = 'Anak'),
                        ' Anak'
                    ) AS family_summary
                FROM public.employee_family
                GROUP BY employee_id
            ) fm ON emp.id = fm.employee_id
        `;

        const [results] = await sequelize.query(query);
        return results;
    }
}

module.exports = new EmployeeRepository();