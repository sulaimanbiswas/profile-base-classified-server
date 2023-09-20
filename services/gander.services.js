const Gander = require("../models/Gander.js");

exports.getGanderService = async (query) => {
  const gander = await Gander.find(query);

  return gander;
};

exports.createGanderService = async (body) => {
  const gander = await Gander.create(body);

  return gander;
};
