'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define('Action', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamp: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.NOW,
      allowNull: false
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },{
      freezeTableName: true,
      tableName: 'action',
      timestamps: false
  });

  Action.associate = models => {
    Action.belongsTo(models.ActionType, { foreignKey: 'action_type_id' });
    Action.belongsTo(models.Priority, { foreignKey: 'priority_id' });
    Action.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  
  return Action;

}