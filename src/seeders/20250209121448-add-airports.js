'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
    {
      name:'Rajiv Gandhi International Airport',
      address:"Shamshabad",
      cityId:19,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Bangalore International Airport',
      address:"Chenna Swami Place",
      cityId:18,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Chatrapati Shivaji International Airport',
      address:"Nasik",
      cityId:18,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Delhi International Airport',
      address:"Chor Bazar",
      cityId:16,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Delhi NON_int Airport',
      address:"Police Bazar",
      cityId:16,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ],{})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airports',null,{});
  }
};
