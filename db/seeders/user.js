'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Charley',
          surname: 'Buthelezi',
          email: 'charley@mfbproject.co.za',
          password: 'QWxmYVJvbWVv',
          createdAt: '2019-02-14T11:04:28.233Z',
          updatedAt: '2019-02-14T11:04:28.233Z',
          salt: 'QWxmYVJvbWVv',
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
