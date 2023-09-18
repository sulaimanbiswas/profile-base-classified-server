const State = require("../models/State");

exports.getStateService = async (filter, queries) => {
  const state = await State.find(filter)
    .select(queries.fields)
    .sort(queries.sort)
    .limit(queries.limit)
    .skip(queries.skip);

  const total = await State.countDocuments(filter);
  const page = Math.ceil(total / queries.limit);
  return { state, total, page };
};

// exports.createStateService = async (stateData) => {
//   const state = await State.create(stateData);
//   return state;
// };
