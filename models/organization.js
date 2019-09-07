/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Organization', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    organization_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OrganizationType',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    map_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mailing_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    meeting_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'organization',
  });
};
