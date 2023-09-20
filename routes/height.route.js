const express = require("express");
const router = express.Router();
const heightController = require("../controllers/height.controller.js");

router
  .route("/")
  .get(heightController.getHeights)
  .post(heightController.createHeight);

module.exports = router;
