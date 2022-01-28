const express = require('express');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')
const router = express.Router();
const models = require("../models");
const { request } = require('express');
const jwt = require("jsonwebtoken");

exports.createPost = (req, res, next) =>{
    if(!req.body.postText && req.file){
        const post = models.Post.create({
            imgUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
            userName: req.body.userName,
            userId: req.body.userId,
    })
        .then((post) => {
            res.status(201).json({
                message: "only image post created"
            })
        })
    } else if (req.body.postText && !req.file){
        const post = models.Post.create({
            userName: req.body.userName,
            userId: req.body.userId,
            postText: req.body.postText
    })
        .then((post) => {
            res.status(201).json({
                message: "only text post created"
            })
        })
    } else if (req.body.postText && req.file) {
        const post = models.Post.create({
            userName: req.body.userName,
            userId: req.body.userId,
            postText: req.body.postText,
            imgUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,

    })
        .then((post) => {
            res.status(201).json({
                message: "full post created"
            })
        })
    } else{
        res.status(500).json({message: "empty post"})
    }
}

exports.getAllPosts = (req, res ,next ) => {
    models.Post.findAll()
    .then((posts) => {
        res.status(200).json({posts})
    })
}

exports.deletePost = (req, res, next) => {
    models.Post.destroy({
        where: {
            id: req.body.postId
        }
    })
}

exports.createComment = (req, res ,next) => {
    const comment = models.Comment.create({
        userId: req.body.userId,
        postId: req.body.postId,
        commentText: req.body.commentText,
    })
}

exports.getAllComment = (req, res ,next) => {
    models.Comment.findAll()
    .then((comment) => {
        res.status(200).json({comment})
    })
}
