const express = require("express");
const router = express.Router();
const stateController = require("../controllers/state.controller.js");

router
  .route("/")
  .get(stateController.getStates)
  .post(stateController.createState);

module.exports = router;
