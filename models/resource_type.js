/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'resource_type',
  });
};
