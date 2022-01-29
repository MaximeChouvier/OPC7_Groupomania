const express = require("express");
const postCtrl = require("../controllers/post");
const router = express.Router();
const multer = require("../middleware/multer-config")

//Gestion des posts
router.post("/createPost", multer, postCtrl.createPost);
router.get("/getAllPosts", postCtrl.getAllPosts);
router.put("/editPost", multer, postCtrl.editPost)
router.put("/deletePost", postCtrl.deletePost)


//Gestion des commentaires
router.post("/createComment", postCtrl.createComment)
router.get("/getAllComment", postCtrl.getAllComment)
router.put("/deleteComment", postCtrl.deleteComment)
router.put("/editComment", postCtrl.editComment)
module.exports = router;