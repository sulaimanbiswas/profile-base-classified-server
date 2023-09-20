const express = require("express");
const router = express.Router();
const hairColorController = require("../controllers/hairColor.controller.js");

router
  .route("/")
  .get(hairColorController.getHairColors)
  .post(hairColorController.createHairColor);

module.exports = router;
