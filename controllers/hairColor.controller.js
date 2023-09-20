const {
  getHairColorService,
  createHairColorService,
} = require("../services/hairColor.services.js");

exports.getHairColors = async (req, res) => {
  try {
    const hairColor = await getHairColorService(req.query);

    res.status(200).json({
      status: "success",
      result: hairColor.length,
      data: {
        hairColor,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createHairColor = async (req, res) => {
  try {
    const hairColor = await createHairColorService(req.body);

    res.status(201).json({
      status: "success",
      data: {
        hairColor,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
