const {
  getStateService,
  createStateService,
} = require("../services/state.services.js");

exports.getStates = async (req, res) => {
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
    const states = await getStateService(filters, queries);

    res.status(200).json({
      status: "success",
      data: {
        total: states.total,
        page: states.page,
        states: states.state,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// exports.createState = async (req, res) => {
//   try {
//     const state = await createStateService(req.body);

//     res.status(201).json({
//       status: "success",
//       data: {
//         state,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };
