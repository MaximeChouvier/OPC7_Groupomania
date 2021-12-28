'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model { };
  Post.init({
      userId: DataTypes.INTEGER,
      postText: DataTypes.TEXT,
      imgUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};