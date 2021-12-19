const express = require("express");
const userCtrl = require("../controllers/user");
const router = express.Router();

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.post("/delete", userCtrl.deleteUser);
router.put("/EditAccount", userCtrl.EditAccount)
router.post("/getUserProfileInfo", userCtrl.getUserProfileInfo)

module.exports = router;