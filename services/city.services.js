const City = require("../models/City");

exports.getCityService = async (filter, queries) => {
  const city = await City.find(filter)
    .select(queries.fields)
    .sort(queries.sort)
    .limit(queries.limit)
    .skip(queries.skip);
  const total = await City.countDocuments(filter);
  const page = Math.ceil(total / queries.limit);

  return { city, total, page };
};

// exports.createCityService = async (cityData) => {
//   const city = await City.create(cityData);
//   return city;
// };
