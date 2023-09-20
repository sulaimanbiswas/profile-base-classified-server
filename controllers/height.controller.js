const {
  getHeightService,
  createHeightService,
} = require("../services/height.services.js");

exports.getHeights = async (req, res) => {
  try {
    const heights = await getHeightService(req.query);

    res.status(200).json({
      status: "success",
      result: heights.length,
      data: {
        heights,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createHeight = async (req, res) => {
  try {
    const height = await createHeightService(req.body);

    res.status(201).json({
      status: "success",
      data: {
        height,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
