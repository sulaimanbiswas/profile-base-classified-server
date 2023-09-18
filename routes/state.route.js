const express = require("express");
const router = express.Router();
const stateController = require("../controllers/state.controller.js");

router
  .route("/")

  /**
   * @route GET /states
   * @group State - Operations about state
   * @returns {object} 200 - An array of state info
   * @returns {Error}  default - Unexpected error
   * @filter {string} name - Filter by name
   * @filter {string} country - Filter by country
   * @filter {string} state - Filter by state
   * @filter {string} page - Filter by page
   * @filter {string} limit - Filter by limit
   * @filter {string} sort - Filter by sort
   * @filter {string} fields - Filter by fields
   */
  .get(stateController.getStates);
// .post(stateController.createState);

module.exports = router;
