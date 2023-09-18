const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country.controller");

router
  .route("/")

  /**
   * @route GET /countries
   * @group Country - Operations about country
   * @returns {object} 200 - An array of country info
   * @returns {Error}  default - Unexpected error
   * @filter {string} name - Filter by name
   * @filter {string} country - Filter by country
   * @filter {string} page - Filter by page
   * @filter {string} limit - Filter by limit
   * @filter {string} sort - Filter by sort
   * @filter {string} fields - Filter by fields
   */

  .get(countryController.getCountries);

// .post(countryController.createCountry);

module.exports = router;
