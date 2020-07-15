'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },{
      freezeTableName: true,
      tableName: 'resource',
      timestamps: false
  });

  Resource.associate = models => {
    Resource.belongsTo(models.User, { foreignKey: 'user_id' });
    Resource.belongsTo(models.ResourceType, { foreignKey: 'resource_type_id' });
  };
 
  return Resource;

}