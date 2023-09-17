const Country = require("../models/Country");

exports.getCountryService = async () => {
  const country = await Country.find();
  return country;
};

exports.createCountryService = async (countryData) => {
  const country = await Country.create(countryData);
  return country;
};
