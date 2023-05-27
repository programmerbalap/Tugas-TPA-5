'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.associate = (models) => {
        // products.belongsTo(models.users, {
        //   sourceKey: 'id_user',
        //   foreignKey: 'id',
        // });
        // products.belongsTo(models.categories, {
        //   sourceKey: 'id_categori',
        //   foreignKey: 'id',
        // });
      };
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      id_categori: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'products',
    }
  );
  return products;
};
