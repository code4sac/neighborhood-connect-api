'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const OrganizationOwner = sequelize.define('OrganizationOwner', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    }
    
  }, 
  {
      freezeTableName: true,
      tableName: 'organization_owner',
      timestamps: false
  });

  return OrganizationOwner; 
}