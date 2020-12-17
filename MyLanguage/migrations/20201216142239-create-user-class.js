'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserClasses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      ClassId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LanguageClasses',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
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
    return queryInterface.dropTable('UserClasses');
  }
};