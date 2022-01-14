const express = require("express");
const postCtrl = require("../controllers/post");
const router = express.Router();
const multer = require("../middleware/multer-config")

router.post("/createPost", multer, postCtrl.createPost);
router.get("/getAllPosts", postCtrl.getAllPosts);
router.put("/deletePost", postCtrl.deletePost)

module.exports = router;