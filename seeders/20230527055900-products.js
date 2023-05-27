'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Samsung Galaxi',
          id_categori: 1,
          id_user: 1,
        },
        {
          name: 'Samsung J2 Prime',
          id_categori: 1,
          id_user: 1,
        },
        {
          name: 'Samsung J3 Pro',
          id_categori: 1,
          id_user: 1,
        },
        {
          name: 'Samsung J1',
          id_categori: 1,
          id_user: 1,
        },
        {
          name: 'Lenovo 21YY',
          id_categori: 2,
          id_user: 1,
        },
        {
          name: 'Lenovo MP 55',
          id_categori: 2,
          id_user: 2,
        },
        {
          name: 'Vivo',
          id_categori: 3,
          id_user: 2,
        },
        {
          name: 'Vivo G 28',
          id_categori: 3,
          id_user: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
