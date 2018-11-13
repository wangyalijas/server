'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkTag = sequelize.define('WorkTag', {
    workId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    workType: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  WorkTag.associate = function(models) {
    // associations can be defined here
  };
  return WorkTag;
};