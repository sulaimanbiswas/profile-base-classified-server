const { signupService, loginService } = require("../services/user.services");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res, next) => {
  try {
    const user = await signupService(req.body);

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide email and password");
    }

    const user = await loginService(email);

    if (!user) {
      throw new Error("Incorrect email or password");
    }

    const isMatch = user.correctPassword(password);

    if (!isMatch) {
      throw new Error("Incorrect email or password");
    }

    if (user.status === "pending") {
      throw new Error("Please verify your email address");
    }

    if (user.status === "inactive") {
      throw new Error("Your account is inactive");
    }

    if (user.status === "blocked") {
      throw new Error("Your account is blocked");
    }

    if (user.status === "deleted") {
      throw new Error("Your account is deleted");
    }

    if (user.status === "banned") {
      throw new Error("Your account is banned");
    }

    const token = generateToken(user);

    const { password: userPassword, ...userInfo } = user._doc;

    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: {
        user: userInfo,
        token,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        user: req.user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
