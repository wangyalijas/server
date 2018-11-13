'use strict';
module.exports = (sequelize, DataTypes) => {
  const BrowseLog = sequelize.define('BrowseLog', {
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    workType: DataTypes.INTEGER,
    workId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  BrowseLog.associate = function(models) {
    // associations can be defined here
  };
  return BrowseLog;
};