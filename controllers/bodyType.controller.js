const {
  getBodyTypeService,
  createBodyTypeService,
} = require("../services/bodyType.services.js");

exports.getBodyTypes = async (req, res) => {
  try {
    const bodyTypes = await getBodyTypeService(req.query);

    res.status(200).json({
      status: "success",
      result: bodyTypes.length,
      data: {
        bodyTypes,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createBodyType = async (req, res) => {
  try {
    const bodyType = await createBodyTypeService(req.body);

    res.status(201).json({
      status: "success",
      data: {
        bodyType,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
