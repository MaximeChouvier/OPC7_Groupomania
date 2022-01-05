const express = require("express");
const postCtrl = require("../controllers/post");
const router = express.Router();

router.post("/createPost", postCtrl.createPost);
router.get("/getAllPosts", postCtrl.getAllPosts);
router.put("/deletePost", postCtrl.deletePost)

module.exports = router;