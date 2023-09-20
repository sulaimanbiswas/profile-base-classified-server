const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: [true, "Country name is required"],
    trim: true,
    unique: true,
  },
  iso3: String,
  iso2: String,
  numeric_code: String,
  phone_code: String,
  capital: String,
  currency: String,
  currency_name: String,
  currency_symbol: String,
  tld: String,
  native: String,
  region: String,
  region_id: String,
  subregion: String,
  subregion_id: String,
  nationality: String,
  timezones: String,
  translations: String,
  latitude: String,
  longitude: String,
  emoji: String,
  emojiU: String,
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
