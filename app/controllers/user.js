const express = require('express');
const bcrypt = require('bcryptjs');
const sequelize = require('sequelize')
const router = express.Router();
const User = require("../models/user")

exports.signup = (req, res, next) => {
bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
        const newUser = new User({
            email: req.body.email,
            name: hash,
            firstname: req.body.firstname,
            password: hash,
        });
        newUser.save()
            .then(() => res.status(200).json({message: "Nice, user created"}))
            .catch(error => res.status(400).json({error}));
        })



};

exports.login = (req, res, next) => {
    res.send("yo");
};

// email: DataTypes.STRING,
// name: DataTypes.STRING,
// firstName: DataTypes.STRING,
// password: DataTypes.STRING,
// isAdmin: DataTypes.BOOLEAN