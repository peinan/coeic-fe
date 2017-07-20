'use strict';
module.exports = function(sequelize, DataTypes) {
  var voice = sequelize.define('voice', {
    uploaded_img_id: DataTypes.INTEGER,
    dirname: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return voice;
};