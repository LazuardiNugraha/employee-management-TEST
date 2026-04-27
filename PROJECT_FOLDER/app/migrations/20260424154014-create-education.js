'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("education", {
      /**
       * id int NOT NULL
       * employee_id int NOT NULL
       * name string(255)
       * level enum(TK, SD, SMP, SMA, STRATA 1, STRATA 2, DOKTOR, PROFESOR)
       * description string(255) NOT NULL
       * created_by string NOT NULL
       * updated_by string NOT NULL
       * created_at date NOT NULL
       * updated_at date NOT NULL
       */
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "employee",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      name: Sequelize.STRING,
      level: {
        type: Sequelize.ENUM,
        values: ['TK', 'SD', 'SMP', 'SMA', 'Strata 1', 'Strata 2', 'Doktor', 'Profesor']
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_by: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updated_by: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("education");
  }
};
