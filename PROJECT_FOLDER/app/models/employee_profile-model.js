const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db_test");

const EmployeeProfile = sequelize.define("employee_profile",
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
        place_of_birth: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: true
        },
        gender: DataTypes.ENUM('Laki-Laki','Perempuan'),
        is_married: DataTypes.BOOLEAN,
        prof_pict: {
            type: DataTypes.STRING,
            allowNull: true
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
        tableName: "employee_profile",
        timestamps: false
    }
);

EmployeeProfile.associate = (models) => {
    EmployeeProfile.belongsTo(models.employee, {
        foreignKey: 'employee_id',
        as: 'employee'
    });
}

module.exports = EmployeeProfile;