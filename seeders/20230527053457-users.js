'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Subhan',
          email: 'subhan@gmail.com',
          password: '123',
          role: 1,
        },
        {
          name: 'Alifta',
          email: 'alifta@gmail.com',
          password: '123',
          role: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
