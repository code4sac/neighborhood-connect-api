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
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    map_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mailing_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    meeting_location: {
      type: DataTypes.STRING,
      allowNull: true
    }

  },{
      freezeTableName: true,
      tableName: 'organization',
      timestamps: false
  });

  
  Organization.associate = models => {
    Organization.belongsTo(models.OrganizationType, { foreignKey: 'organization_type_id' });
    Organization.hasMany(models.OrganizationSocialMedia, { foreignKey: 'organization_id' });
  };

  
  return Organization;

}