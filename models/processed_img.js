'use strict';
module.exports = function(sequelize, DataTypes) {
  var processed_img = sequelize.define('processed_img', {
    uploaded_img_id: DataTypes.INTEGER,
    dirname: DataTypes.STRING,
    n_frame: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return processed_img;
};