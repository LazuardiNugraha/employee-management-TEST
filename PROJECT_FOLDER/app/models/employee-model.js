const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db_test");

const Employee = sequelize.define("employee",
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
    Employee.hasOne(models.employe_profile, {
        foreignKey: 'employee_id',
        as: 'profile'
    });
};

Employee.associate = (models) => {
    Employee.hasMany(models.employee_family, {
        foreignKey: 'employee_id',
        as: 'id'
    });
};

Employee.associate = (models) => {
    Employee.hasMany(models.education, {
        foreignKey: 'employee_id',
        as: 'id'
    });
};

module.exports = Employee;