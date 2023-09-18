const City = require("../models/City");

exports.getCityService = async () => {
  const city = await City.find({});
  return city;
};

exports.createCityService = async (cityData) => {
  const city = await City.create(cityData);
  return city;
};
