'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const OrganizationType = sequelize.define('OrganizationType', {
      
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
        tableName: 'organization_type',
        timestamps: false
    });

    return OrganizationType; 
}



