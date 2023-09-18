const State = require("../models/State");

exports.getStateService = async () => {
  const state = await State.find({});
  return state;
};

exports.createStateService = async (stateData) => {
  const state = await State.create(stateData);
  return state;
};
