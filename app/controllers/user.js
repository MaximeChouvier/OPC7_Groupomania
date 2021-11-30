const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')
const router = express.Router();
const models = require("../models");
const { request } = require('express');
const jwt = require("jsonwebtoken");

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
          isAdmin: false
          //response
  })
    .then((user) => {
      res.status(201).json({
        userId: user.id,
        message:"user created"
      });
    })
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
            res.status(200).json({
              userId: user.id,
              name: user.name,
              firstname: user.firstname,
              token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, "C(Y97Y4#R}yep5J}", {
                expiresIn: "24h",
              }),
            });
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
};