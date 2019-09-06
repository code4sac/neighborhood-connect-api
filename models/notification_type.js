/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification_type', {
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
  }, {
    tableName: 'notification_type',
  });
};
