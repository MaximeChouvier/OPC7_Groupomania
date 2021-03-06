const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')
const router = express.Router();
const models = require("../models");
const { request } = require('express');
const jwt = require("jsonwebtoken");
const { where } = require('sequelize');

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
              token: jwt.sign({name: user.name, firstname: user.firstname, userId: user.id, isAdmin: user.isAdmin }, "C(Y97Y4#R}yep5J}", {
                expiresIn: "24h",
              }),
            });
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
};

exports.deleteUser = (req, res, next) => {

    models.User.destroy({
    where: {
        id : req.body.userId
    }
})
  res.status(200).json({
    message: "User deleted"
  })
};

exports.EditAccount = (req, res ,next) => {
  if (!req.body.email && !req.body.password && !req.file) {
    //no email, no password, no img, error.
    res.status(500).json({message: "Nothing to update"})
  } else if (!req.body.email && req.body.password && !req.file){
    //only update password
    bcrypt
    .hash(req.body.password, 10)
      .then((hash) => {
        let update = {
          password: hash
        }
        models.User.update(update, {
          where: {
            id: req.body.userId
          }
        })
      })
    res.status(200).json({message: "Password Updated"})
  } else if (req.body.email && !req.body.password && !req.file){
    //only update email
    let updated = {
      email: req.body.email
    }
    models.User.update(updated, {
      where: {
        id: req.body.userId
      }
    })
    
    res.status(200).json({message: "Email Updated"})
  } else if (!req.body.email && !req.body.password && req.file) {
    //only update img
    let update = {
      imgUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
    }
    models.User.update(update, {
      where: {
        id: req.body.userId
      }
    })
    res.status(200).json({message: "image updated"})
  } else if (req.body.email && !req.body.password && req.file) {
    //update email && img
    let update = {
      email: req.body.email,
      imgUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
    }
    models.User.update(update, {
      where: {
        id: req.body.userId,
      }
    })
    res.status(200).json({message: "Email & image Updated"})
  } else if (req.body.email && req.body.password && !req.file) {
    //update password && email
    bcrypt
    .hash(req.body.password, 10)
      .then((hash) => {
        let update = {
          password: hash,
          email:req.body.email
        }
        models.User.update(update, {
          where: {
            id: req.body.userId
          }
        })
      })
    res.status(200).json({message: "password & image Updated"})
  } else if (!req.body.email && req.body.password && req.file) {
    //update password && image
    bcrypt
    .hash(req.body.password, 10)
      .then((hash) => {
        let update = {
          password: hash,
          imgUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
        }
        models.User.update(update, {
          where: {
            id: req.body.userId
          }
        })
      })
    res.status(200).json({message: "Updated password & image"})
  } else if (req.body.email && req.body.password && req.file) {
    //update everything
    bcrypt
    .hash(req.body.password, 10)
      .then((hash) => {
        let update = {
          password: hash,
          email: req.body.email,
          imgUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
        }
        models.User.update(update, {
          where: {
            id: req.body.userId
          }
        })
      })
    res.status(200).json({message: "Updated everything"})
  }
};

exports.getUserProfileInfo = (req, res, next) => {
  models.User.findOne({where : {id: req.body.userId}})
    .then((user) => {
        res.status(200).json({
          message: "User found, returning values",
          firstname: user.firstname,
          name: user.name,
          isAdmin: user.isAdmin,
          id: user.id,
          imgUrl: user.imgUrl
        })
    })
    .catch((error) => {error})
}