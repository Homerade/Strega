'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'isActive', { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false });
  }
};
