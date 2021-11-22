const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')
const router = express.Router();
const models = require("../models");
const { request } = require('express');


exports.signup = (req, res, next) => {
models.User.findOne({where : {email: req.body.email}})
  .then((user) => {
    if (!user){
      bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const user = models.User.create({
          email: req.body.email,
          name: req.body.name,
          firstname: req.body.firstname,
          password: hash,
          isAdmin: true
  })
    .then((user) => {
      res.status(201).json({
        userId: user.id
      });
    })
    .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
    .catch((error) => res.status(400).json({ error}));
})
.catch((error) => res.status(500).json({ error: error }));
    } else {
      res.status(401).json({error: "Un utilisateur utilise déja cet email"})
    }
  })

};

exports.login = (req, res, next) => {
models.User.findOne({where : {email: req.body.email}})
    .then((user) => {
      if (!user) {
        res.status(404).json({error: "User not found"})
      } else {
        bcrypt.compare (req.body.password, user.password)
          .then ((valid) => {
            if (!valid) {
              return res.status(401).json({ error: "User found but passwords aren't matching"})
            }
            res.status(200).json({message: "Vous êtes connecté"})
          })
      }
    })
};