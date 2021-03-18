'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PriorityStatusType = sequelize.define('PriorityStatusType', {
    
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
      tableName: 'priority_status_type',
      timestamps: false
  });

  return PriorityStatusType; 
}