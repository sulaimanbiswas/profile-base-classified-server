const {
  getUsersService,
  createUserService,
} = require("../services/user.services");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await getUsersService();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
