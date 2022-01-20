'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model { };
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    imgUrl: DataTypes.TEXT,
    firstname: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};