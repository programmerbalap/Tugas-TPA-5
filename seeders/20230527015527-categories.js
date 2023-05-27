'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Samsung',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lenovo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vivi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nokia',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
