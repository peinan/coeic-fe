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
        'processed_imgs',
        ['uploaded_img_id'],
        {
          indexName: 'processed_imgs_uploaded_img_id_index',
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
      queryInterface.removeIndex('processed_imgs', 'processed_imgs_uploaded_img_id_index'),
    ];
  }
};
