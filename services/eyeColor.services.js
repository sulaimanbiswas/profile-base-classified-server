const EyeColor = require("../models/EyeColor.js");

exports.getEyeColorService = async (query) => {
  const eyeColor = await EyeColor.find(query);

  return eyeColor;
};

exports.createEyeColorService = async (body) => {
  const eyeColor = await EyeColor.create(body);

  return eyeColor;
};
