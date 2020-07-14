'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Priority = sequelize.define('Priority', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
      freezeTableName: true,
      tableName: 'priority',
      timestamps: false
  });

  
  Priority.associate = models => {
    Priority.belongsTo(models.PriorityStatusType, { foreignKey: 'priority_status_type_id' });
    Priority.belongsTo(models.PriorityType, { foreignKey: 'priority_type_id' });
    Priority.belongsTo(models.User, { foreignKey: 'user_id' });
    Priority.belongsTo(models.Organization, { foreignKey: 'organization_id' });
  };

  
  return Priority;

}