const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country.controller");

router
  .route("/")
  .get(countryController.getCountries)
  .post(countryController.createCountry);

module.exports = router;
