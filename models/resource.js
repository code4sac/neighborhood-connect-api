/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    resource_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'resource_type',
        key: 'id',
      },
    },
  }, {
    tableName: 'resource',
  });
};
