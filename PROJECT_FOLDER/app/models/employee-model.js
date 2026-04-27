module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            nik: {
                type: DataTypes.STRING,
                allowNull: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            is_active: DataTypes.BOOLEAN,
            start_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            end_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            created_by: {
                type: DataTypes.STRING,
                allowNull: true
            },
            updated_by: {
                type: DataTypes.STRING,
                allowNull: true
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            tableName: "employee",
            timestamps: false
        }
    );

    Employee.associate = (models) => {
        Employee.hasOne(models.EmployeeProfile, {
            foreignKey: 'employee_id',
            as: 'profile'
        });

        Employee.hasMany(models.EmployeeFamily, {
          foreignKey: 'employee_id',
          as: 'families',
        });

        Employee.hasMany(models.Education, {
            foreignKey: 'employee_id',
            as: 'educations',
        });
    };

    return Employee;
}