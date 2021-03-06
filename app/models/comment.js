'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model { };
  Comment.init({
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      userImage: DataTypes.TEXT,
      commentText: DataTypes.TEXT,
      userName: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};