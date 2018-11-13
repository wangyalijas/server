'use strict';
module.exports = (sequelize, DataTypes) => {
  const Download = sequelize.define('Download', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    submiterId: DataTypes.INTEGER,
    submiterNo: DataTypes.STRING,
    cover: DataTypes.STRING,
    content: DataTypes.TEXT,
    isLatest: DataTypes.BOOLEAN,
    isIndexShow: DataTypes.BOOLEAN,
    sort: DataTypes.INTEGER,
    menuId: DataTypes.INTEGER,
    imageNo: DataTypes.STRING,
    colorMode: DataTypes.STRING,
    fileSize: DataTypes.STRING,
    fileFormat: DataTypes.STRING,
    workSoftware: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  Download.associate = function(models) {
    // associations can be defined here
  };
  return Download;
};