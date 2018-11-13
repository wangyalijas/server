'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPermission = sequelize.define('UserPermission', {
    userId: DataTypes.INTEGER,
    userNo: DataTypes.STRING,
    firstPermission: DataTypes.INTEGER,
    secondPermission: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  UserPermission.associate = function(models) {
    // associations can be defined here
  };
  return UserPermission;
};