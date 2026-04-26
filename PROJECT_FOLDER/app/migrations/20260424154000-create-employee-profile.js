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
    await queryInterface.createTable("employee_profile", {
      /**
       * PK id int NOT NULL
       * employee_id int NOT NULL
       * place_of_birth string NULL
       * date_of_birth date NULL
       * gender enum(Laki-Laki, Perempuan)
       * is_married boolean
       * prof_pict string(255) NULL
       * created_by string(255) NULL
       * updated_by string(255) NULL
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
        unique: true,
        references: {
          model: "employee",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      place_of_birth: {
        type: Sequelize.STRING,
        allowNull: true
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM,
        values: [
          'Laki-Laki',
          'Perempuan'
        ],
      },
      is_married: Sequelize.BOOLEAN,
      prof_pict: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable("employee_profile");
  }
};
