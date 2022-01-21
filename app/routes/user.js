const express = require("express");
const userCtrl = require("../controllers/user");
const router = express.Router();
const multer = require("../middleware/multer-config")

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);


router.post("/delete", userCtrl.deleteUser);
router.put("/EditAccount",multer, userCtrl.EditAccount)



router.post("/getUserProfileInfo", userCtrl.getUserProfileInfo)

module.exports = router;