const {
  getEyeColorService,
  createEyeColorService,
} = require("../services/eyeColor.services.js");

exports.getEyeColors = async (req, res) => {
  try {
    const eyeColors = await getEyeColorService(req.query);

    res.status(200).json({
      status: "success",
      result: eyeColors.length,
      data: {
        eyeColors,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createEyeColor = async (req, res) => {
  try {
    const eyeColor = await createEyeColorService(req.body);

    res.status(201).json({
      status: "success",
      data: {
        eyeColor,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
