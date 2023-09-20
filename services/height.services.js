const Height = require("../models/Height.js");

exports.getHeightService = async (query) => {
  const height = await Height.find(query);

  return height;
};

exports.createHeightService = async (body) => {
  const height = await Height.create(body);

  return height;
};
