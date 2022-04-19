'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Frequency', [{
       user_id: 1,
       patient_id: 1,
       date: new Date(),
     },
      {
        user_id: 2,
        patient_id: 2,
        date: new Date(),
      }
     ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Frequency', null, {});
  }
};
