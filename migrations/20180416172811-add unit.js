'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'pricingUnit', { type: Sequelize.STRING });
  }
};
