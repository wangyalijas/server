'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      submiterId: {
        type: Sequelize.INTEGER
      },
      submiterNo: {
        type: Sequelize.STRING
      },
      cover: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      isLatest: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      isIndexShow: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      sort: {
        type: Sequelize.INTEGER
      },
      menuId: {
        type: Sequelize.INTEGER
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cases');
  }
};