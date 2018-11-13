'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
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
    isActive: DataTypes.BOOLEAN
  }, {});
  Case.associate = function (models) {
    this.User = this.belongsTo(models.UserEntity, {
      as: 'submiter',
      targetKey: 'userNo',
      foreignKey: 'submiterNo'
    })
    this.SecondMenu = this.belongsTo(models.Menu, {
      as: 'secondMenu',
      targetKey: 'id',
      foreignKey: 'menuId'
    })
    this.Tags = this.belongsToMany(models.Tag, {
      as: 'tags',
      through: models.WorkTag,
      foreignKey: 'workId',
      otherKey: 'tagId'
    })
  };
  return Case;
};