const {
  getCityService,
  createCityService,
} = require("../services/city.services.js");

exports.getCities = async (req, res) => {
  try {
    const cities = await getCityService();

    res.status(200).json({
      status: "success",
      results: cities.length,
      data: {
        cities,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createCity = async (req, res) => {
  try {
    const city = await createCityService(req.body);

    res.status(201).json({
      status: "success",
      data: {
        city,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
