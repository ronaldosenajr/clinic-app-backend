'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'teste@teste.com',
      password: '123456789'
     }, {
      name: 'Fabielly Rodrigues',
      email: 'teste2@teste2.com',
      password: '123456789'
     }], {}); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
