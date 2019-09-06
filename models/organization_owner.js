/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization_owner', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    organization_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'organization',
        key: 'id',
      },
    },
  }, {
    tableName: 'organization_owner',
  });
};
