'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reply = sequelize.define('Reply', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Reply.belongsTo(models.Message);
        Reply.belongsTo(models.User);
      }
    }
  });
  return Reply;
};