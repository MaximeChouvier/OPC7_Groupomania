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

exports.editPost = (req, res, next) => {
    console.log(req.body)
    if(req.body.postText && !req.file){
        let update = {
            postText: req.body.postText
        }
        models.Post.update(update, {
            where: {
            id: req.body.postId
            }
        })
        res.status(200).json({message: "text updated"})
    }else if (!req.body.postText && req.file){
        let update = {
            imgUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
        }
        models.Post.update(update, {
            where: {
            id: req.body.postId
            }
        })
        res.status(200).json({message: "image updated"})
    } else if (req.body.postText && req.file){
        let update = {
            imgUrl: `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
            postText: req.body.postText
        }
        models.Post.update(update, {
            where: {
            id: req.body.postId
            }
        })
        res.status(200).json({message: "both updated"})
    }
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
        userImage: req.body.userImage,
        commentText: req.body.commentText,
        userName: req.body.userName,
    })
    res.send(201).json({message: "Comment created"})
}

exports.getAllComment = (req, res ,next) => {
    models.Comment.findAll()
    .then((comment) => {
        res.status(200).json({comment})
    })
}

exports.deleteComment = (req, res, next) => {
    models.Comment.destroy({
        where: {
            id: req.body.id
        }
    })
    res.send(200).json({message: "Comment deleted"})
}

exports.editPost = (req, res , next) => {
    console.log(req.body)
    let update = {
        commentText: req.body.text
    }
    models.Comment.update(update, {
        where: {
        id: req.body.id
        }
    })
    status.send(200).json({message: "Post text updated"})
}
