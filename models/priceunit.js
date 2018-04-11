'use strict';
module.exports = (sequelize, DataTypes) => {
  var PriceUnit = sequelize.define('PriceUnit', {
    unit: DataTypes.STRING
  }, {});
  PriceUnit.associate = function(models) {
    // associations can be defined here
  };
  return PriceUnit;
};