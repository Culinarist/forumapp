'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic = sequelize.define('Topic', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
    //UserId: DataTypes.INTEGER,
    //MessageId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Topic.hasMany(models.Message);
        Topic.belongsTo(models.User);
      }
    }
  });
  return Topic;
};