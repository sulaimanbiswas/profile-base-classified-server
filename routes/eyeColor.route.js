const express = require("express");
const router = express.Router();
const eyeColorController = require("../controllers/eyeColor.controller.js");

router
  .route("/")
  .get(eyeColorController.getEyeColors)
  .post(eyeColorController.createEyeColor);

module.exports = router;
