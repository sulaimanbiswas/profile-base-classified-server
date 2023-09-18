const express = require("express");
const router = express.Router();
const cityController = require("../controllers/city.controller.js");

router
  .route("/")

  /**
   * @route GET /cities
   * @group City - Operations about city
   * @returns {object} 200 - An array of city info
   * @returns {Error}  default - Unexpected error
   * @filter {string} name - Filter by name
   * @filter {string} country - Filter by country
   * @filter {string} state - Filter by state
   * @filter {string} page - Filter by page
   * @filter {string} limit - Filter by limit
   * @filter {string} sort - Filter by sort
   * @filter {string} fields - Filter by fields
   *
   * */
  .get(cityController.getCities);
// .post(cityController.createCity);

module.exports = router;
