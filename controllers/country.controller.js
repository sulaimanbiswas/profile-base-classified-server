const {
  getCountryService,
  createCountryService,
} = require("../services/country.services");

exports.getCountries = async (req, res) => {
  try {
    const countries = await getCountryService();

    res.status(200).json({
      status: "success",
      results: countries.length,
      data: {
        countries,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.createCountry = async (req, res) => {
  try {
    const country = await createCountryService(req.body);

    res.status(201).json({
      status: "success",
      data: {
        country,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
