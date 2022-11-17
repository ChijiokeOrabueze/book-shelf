'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.changeColumn('Person', "isBetaMember",{
      type: Sequelize.DataTypes.STRING,
      // defaultValue: false,
      allowNull: true
  });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.changeColumn('Person', "isBetaMember",{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    });
  }
};
