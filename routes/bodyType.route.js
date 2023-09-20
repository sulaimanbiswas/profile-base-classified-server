const express = require("express");
const router = express.Router();
const bodyTypeController = require("../controllers/bodyType.controller.js");

router
  .route("/")
  .get(bodyTypeController.getBodyTypes)
  .post(bodyTypeController.createBodyType);

module.exports = router;
