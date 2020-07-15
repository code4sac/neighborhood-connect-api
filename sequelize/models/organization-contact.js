'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const OrganizationContact = sequelize.define('OrganizationContact', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    }

  }, 
  {
      freezeTableName: true,
      tableName: 'organization_contact',
      timestamps: false
  });

  return OrganizationContact; 
}