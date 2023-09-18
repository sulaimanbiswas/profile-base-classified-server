const {
  getStateService,
  createStateService,
} = require("../services/state.services.js");

exports.getStates = async (req, res) => {
  try {
    const states = await getStateService();

    res.status(200).json({
      status: "success",
      results: states.length,
      data: {
        states,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createState = async (req, res) => {
  try {
    const state = await createStateService(req.body);

    res.status(201).json({
      status: "success",
      data: {
        state,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
