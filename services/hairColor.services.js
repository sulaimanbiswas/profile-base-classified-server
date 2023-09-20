const HairColor = require("../models/HairColor.js");

exports.getHairColorService = async (query) => {
  const hairColor = await HairColor.find(query);

  return hairColor;
};

exports.createHairColorService = async (body) => {
  const hairColor = await HairColor.create(body);

  return hairColor;
};
