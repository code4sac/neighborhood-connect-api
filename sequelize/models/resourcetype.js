'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ResourceType = sequelize.define('ResourceType', {
    
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
      tableName: 'resource_type',
      timestamps: false
  });

  return ResourceType; 
}