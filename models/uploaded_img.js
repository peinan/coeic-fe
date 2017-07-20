'use strict';
module.exports = function(sequelize, DataTypes) {
  var uploaded_img = sequelize.define('uploaded_img', {
    filename: DataTypes.STRING,
    is_oneframe: DataTypes.BOOLEAN
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return uploaded_img;
};