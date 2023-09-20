const BodyType = require("../models/BodyType.js");

exports.getBodyTypeService = async (query) => {
  const bodyType = await BodyType.find(query);

  return bodyType;
};

exports.createBodyTypeService = async (body) => {
  const bodyType = await BodyType.create(body);

  return bodyType;
};
