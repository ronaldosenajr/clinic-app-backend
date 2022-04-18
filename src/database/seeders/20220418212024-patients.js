'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('patients', [{
      name: 'Teste1',
      email: 'teste@teste.com',
      name_responsible: 'pai do teste 1',
      cpf_nf: '12345678911',
      user_id: 0
     }, {
      name: 'Teste2',
      email: 'teste2@teste.com',
      name_responsible: 'pai do teste 2',
      cpf_nf: '12345678922',
      user_id: 1
     }], {}); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('patients', null, {});
  }
};
