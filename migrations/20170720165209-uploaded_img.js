'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addIndex(
        'uploaded_imgs',
        ['filename'],
        {
          indexName: 'uploaded_imgs_filename_index',
          indicesType: 'UNIQUE' // ユニークインデックスになります
        },
      ),
    ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeIndex('uploaded_imgs', 'uploaded_imgs_filename_index'),
    ];
  }
};
