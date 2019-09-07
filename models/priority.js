/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Priority', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    priority_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PriorityType',
        key: 'id',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    priority_status_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PriorityStatusType',
        key: 'id',
      },
    },
    organization_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Organization',
        key: 'id',
      },
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Priority',
        key: 'id',
      },
    },
  }, {
    tableName: 'priority',
  });
};
