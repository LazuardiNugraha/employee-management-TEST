const { DataTypes } = require("sequelize");
const { sequelize } = require('../config/db_test');

module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define("education",
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
            name: DataTypes.STRING,
            level: DataTypes.ENUM('TK', 'SD', 'SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor'),
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            created_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            updated_by: {
                type: DataTypes.STRING,
                allowNull: false
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
            tableName: "education",
            timestamps: false
        }
    );

    Education.associate = (models) => {
        Education.belongsTo(models.employee, {
            foreignKey: 'employee_id',
            as: 'employee'
        });
    }

    return Education;
}