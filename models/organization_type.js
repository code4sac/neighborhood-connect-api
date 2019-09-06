/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization_type', {
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
    tableName: 'organization_type',
  });
};
