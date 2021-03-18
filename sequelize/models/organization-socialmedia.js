'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class OrganizationSocialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }


  };
  OrganizationSocialMedia.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrganizationSocialMedia',
  });
  return OrganizationSocialMedia;
};

module.exports = (sequelize, DataTypes) => {
  const OrganizationSocialMedia = sequelize.define('OrganizationSocialMedia', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },

},
{
  tableName: 'organization_social_media',
  freezeTableName: true,
  timestamps: false
});
  return OrganizationSocialMedia;
}