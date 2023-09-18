const Country = require("../models/Country");

exports.getCountryService = async (filter, queries) => {
  const country = await Country.find(filter)
    .select(queries.fields)
    .sort(queries.sort)
    .limit(queries.limit)
    .skip(queries.skip);

  const total = await Country.countDocuments(filter);
  const page = Math.ceil(total / queries.limit);

  return { country, total, page };
};

// exports.createCountryService = async (countryData) => {
//   const country = await Country.create(countryData);
//   return country;
// };
