'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ActionType = sequelize.define('ActionType', {
    
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
      tableName: 'action_type',
      timestamps: false
  });

  return ActionType; 
}