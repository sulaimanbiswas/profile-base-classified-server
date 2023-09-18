const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  id: Number,
  name: String,
  state_id: Number,
  state_code: String,
  country_id: Number,
  country_code: String,
  country_name: String,
  latitude: String,
  longitude: String,
  wikiDataId: String,
});

const City = mongoose.model("City", citySchema);

module.exports = City;
