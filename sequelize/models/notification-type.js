'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const NotificationType = sequelize.define('NotificationType', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, 
  {
      freezeTableName: true,
      tableName: 'notification_type',
      timestamps: false
  });

  return NotificationType; 
}