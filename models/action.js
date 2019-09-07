/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Action', {
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
        model: 'ActionType',
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
        model: 'Priority',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
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
