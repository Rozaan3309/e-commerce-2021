'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Account, {foreignKey: "AccountId"})
      Cart.belongsTo(models.Item, {foreignKey: "ItemId"})
      // models.Account.belongsToMany(models.Item, {through: models.Cart})
      // models.Item.belongsToMany(models.Account, {through: models.Cart})
    }
  };
  Cart.init({
    AccountId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};