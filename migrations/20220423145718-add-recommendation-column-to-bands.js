'use strict';
const { DataTypes } = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('band', 'recommendation', {
      type: DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('band', 'recommendation')
  }
};
