'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.belongsToMany(models.Item, {through: models.Cart})
    }
  };
  Account.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Account',
    hooks: {
      beforeCreate: async (Account, options) => {
        const pass = Account.password
        const hashed = bcrypt.hashSync(pass, saltRounds)
        if (!hashed) {
          console.log("error hash failed")
        } else {
          Account.password = hashed
        }
      },
      beforeUpdate: async (Account, options) => {
        const pass = Account.password
        const hashed = bcrypt.hashSync(pass, saltRounds)
        if (!hashed) {
          console.log("error hash failed")
        } else {
          Account.password = hashed
        }
      }
    }
  });
  return Account;
};