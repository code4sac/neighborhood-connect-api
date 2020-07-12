'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
    
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
      tableName: 'user_type',
      timestamps: false
  });

  return UserType; 
}