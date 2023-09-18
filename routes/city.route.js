const express = require("express");
const router = express.Router();
const cityController = require("../controllers/city.controller.js");

router.route("/").get(cityController.getCities).post(cityController.createCity);

module.exports = router;
