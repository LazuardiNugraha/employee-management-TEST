const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/db_test");

module.exports = (sequelize, DataTypes) => {
    const EmployeeFamily = sequelize.define("employee_family",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            employee_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            identifier: {
                type: DataTypes.STRING,
                allowNull: true
            },
            job: {
                type: DataTypes.STRING,
                allowNull: true
            },
            place_of_birth: {
                type: DataTypes.STRING,
                allowNull: true
            },
            date_of_birth: {
                type: DataTypes.DATE,
                allowNull: true
            },
            religion: DataTypes.ENUM('Islam', 'Katolik', 'Protestan', 'Konghucu'),
            is_life: DataTypes.BOOLEAN,
            is_divorced: DataTypes.BOOLEAN,
            relation_status: DataTypes.ENUM('Suami', 'Istri', 'Anak', 'Anak Sambung'),
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
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            tableName: "employee_family",
            timestamps: false
        }
    );

    EmployeeFamily.associate = (models) => {
        EmployeeFamily.belongsTo(models.employee, {
            foreignKey: 'employee_id',
            as: 'employee'
        });
    }

    return EmployeeFamily;
}