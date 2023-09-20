const express = require("express");
const router = express.Router();
const ganderController = require("../controllers/gander.controller.js");

router
  .route("/")
  .get(ganderController.getGanders)
  .post(ganderController.createGander);

module.exports = router;
