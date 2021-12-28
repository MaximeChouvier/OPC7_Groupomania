const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')
const router = express.Router();
const models = require("../models");
const { request } = require('express');
const jwt = require("jsonwebtoken");

exports.createPost = (req, res, next) =>{
    console.log(req.body)
    if(!req.body.postText && req.body.imgUrl){
        const post = models.Post.create({
            userId: req.body.userId,
            imgUrl: req.body.imgUrl
    })
        .then((post) => {
            res.status(201).json({
                message: "only image post created"
            })
        })
    } else if (req.body.postText && !req.body.imgUrl){
        const post = models.Post.create({
            userId: req.body.userId,
            postText: req.body.postText
    })
        .then((post) => {
            res.status(201).json({
                message: "only text post created"
            })
        })
    } else {
        const post = models.Post.create({
            userId: req.body.userId,
            postText: req.body.postText,
            imgUrl: req.body.imgUrl
    })
        .then((post) => {
            res.status(201).json({
                message: "full post created"
            })
        })
    }
}

exports.getAllPosts = (req, res ,next ) => {
    models.Post.findAll()
    .then((posts) => {
        res.status(200).json({
            posts
        })
    })
}