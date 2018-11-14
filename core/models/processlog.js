'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProcessLog = sequelize.define('ProcessLog', {
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    workId: DataTypes.INTEGER,
    workType: DataTypes.STRING,
    beforeStatus: DataTypes.INTEGER,
    afterStatus: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  ProcessLog.associate = function(models) {
    // associations can be defined here
  };
  return ProcessLog;
};
