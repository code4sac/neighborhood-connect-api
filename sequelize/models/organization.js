'use strict';
const {
  Model
} = require('sequelize');




module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
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




  },{
      freezeTableName: true,
      tableName: 'organization',
      timestamps: false
  });

  
  Organization.associate = models => {
    Organization.belongsTo(models.OrganizationType, { foreignKey: 'organization_type_id' });
  };
  

  return Organization;

}