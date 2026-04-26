'use strict';

const { all } = require('../routes/employee-route');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('employee_family', {
      /**
       * id int NOT NULL
       * employee_id int NOT NULL
       * name string(255) NULL
       * identifier string(255) NULL
       * job string(255) NULL
       * place_of_birth string NULL
       * date_of_birth date NULL
       * religion enum(Islam, Katolik, Protestan, Konghucu)
       * is_life boolean
       * is_divorced boolean
       * relation_status enum(Suami, Istri, Anak, Anak Sambung)
       * created_by string(255) NULL
       * updated_by string(255) NULL
       * created_at date NOT NULL
       * updated_at date NOT NULL
       */
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'employee',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      identifier: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      job: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      place_of_birth: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      religion: {
        type: Sequelize.ENUM,
        values: ['Islam', 'Katolik', 'Protestan', 'Konghucu'],
      },
      is_life: Sequelize.BOOLEAN,
      is_divorced: Sequelize.BOOLEAN,
      relation_status: {
        type: Sequelize.ENUM,
        values: ['Suami', 'Istri', 'Anak', 'Anak Sambung'],
      },
      created_by: {
        type: Sequelize.STRING,
        allowNull: true
      },
      updated_by: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable("employee_family");
  }
};
