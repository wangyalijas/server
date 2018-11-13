'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEntity = sequelize.define('UserEntity', {
    userNo: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    job: DataTypes.STRING,
    directorNo: DataTypes.STRING,
    directorName: DataTypes.STRING,
    email: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  UserEntity.associate = function (models) {
    this.hasMany(models.UserPermission, {foreignKey: 'userId', targetKey: 'id'})
  };
  return UserEntity;
};
