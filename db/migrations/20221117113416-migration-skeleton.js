'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return await queryInterface.removeColumn('Person', "isBetaMember");
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.addColumn('Person', "isBetaMember",{
      type: Sequelize.DataTypes.STRING,
      // defaultValue: false,
      allowNull: true
  });
  }
};
