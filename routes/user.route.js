const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");
const { verifyToken } = require("../middlewares/verifyToken.js");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/me", verifyToken, userController.getMe);

module.exports = router;
