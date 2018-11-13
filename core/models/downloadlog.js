'use strict';
module.exports = (sequelize, DataTypes) => {
  const DownloadLog = sequelize.define('DownloadLog', {
    downloadId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  DownloadLog.associate = function(models) {
    // associations can be defined here
  };
  return DownloadLog;
};