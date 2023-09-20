const {
  getGanderService,
  createGanderService,
} = require("../services/gander.services.js");

exports.getGanders = async (req, res) => {
  try {
    const ganders = await getGanderService(req.query);

    res.status(200).json({
      status: "success",
      result: ganders.length,
      data: {
        ganders,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createGander = async (req, res) => {
  try {
    const gander = await createGanderService(req.body);

    res.status(201).json({
      status: "success",
      data: {
        gander,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
