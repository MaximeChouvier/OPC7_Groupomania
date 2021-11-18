const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')
const router = express.Router();
const models = require("../models");


exports.signup = (req, res, next) => {
console.log(req.body)
bcrypt
.hash(req.body.password, 10)
.then((hash) => {
  const user = models.User.create({
    email: req.body.email,
    name: req.body.name,
    firstname: req.body.firstname,
    password: hash,
  })
    .then((user) => {
      res.status(201).json({
        userId: user.id,
        isAdmin: user.isAdmin,
      });
    })
    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
    .catch((error) => res.status(400).json({ error}));
})
.catch((error) => res.status(500).json({ error: error }));
};

exports.login = (req, res, next) => {
    res.send("yo");
};

// email: DataTypes.STRING,
// name: DataTypes.STRING,
// firstName: DataTypes.STRING,
// password: DataTypes.STRING,
// isAdmin: DataTypes.BOOLEAN