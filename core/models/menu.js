'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    workType: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    description: DataTypes.STRING,
    menuKey: DataTypes.STRING,
    parentId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  Menu.associate = function (models) {
    this.FirstMenu = this.belongsTo(models.Menu, {
      as: 'firstMenu',
      targetKey: 'id',
      foreignKey: 'parentId'
    })
  };
  return Menu;
};