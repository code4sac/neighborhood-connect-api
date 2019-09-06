/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('action', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    action_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'action_type',
        key: 'id',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    priority_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'priority',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'action',
  });
};
