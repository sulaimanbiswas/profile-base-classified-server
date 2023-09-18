const {
  getCityService,
  createCityService,
} = require("../services/city.services.js");

exports.getCities = async (req, res) => {
  try {
    const filters = { ...req.query };

    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete filters[el]);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sort = sortBy;
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    if (req.query.page) {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
      queries.page = page;
      queries.limit = limit;
      queries.skip = skip;
    }

    const cities = await getCityService(filters, queries);

    res.status(200).json({
      status: "success",
      results: cities.length,
      data: {
        total: cities.total,
        page: cities.page,
        cities: cities.city,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// exports.createCity = async (req, res) => {
//   try {
//     const city = await createCityService(req.body);

//     res.status(201).json({
//       status: "success",
//       data: {
//         city,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };
