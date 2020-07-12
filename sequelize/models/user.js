'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
      freezeTableName: true,
      tableName: 'user',
      timestamps: false
  });

  
  User.associate = models => {
    User.belongsTo(models.UserType, { foreignKey: 'user_type_id' });
    User.belongsTo(models.NotificationType, { foreignKey: 'notification_type_id' });
    User.belongsTo(models.Organization, { foreignKey: 'organization_id' });
  };

  
  return User;

}