'use strict';
module.exports = (sequelize, DataTypes) => {
  const SearchLog = sequelize.define('SearchLog', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  SearchLog.associate = function(models) {
    // associations can be defined here
  };
  return SearchLog;
};