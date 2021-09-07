'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let pass = 'abcabc'
     const hashed = bcrypt.hashSync(pass, saltRounds)
     if (!hashed) {
       console.log("error hash failed")
     } else {
       pass = hashed
     }

     await queryInterface.bulkInsert('Accounts', [{
       name: 'Alan',
       email: 'alan@email.com',
       password: pass,
       isAdmin: "true",
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
