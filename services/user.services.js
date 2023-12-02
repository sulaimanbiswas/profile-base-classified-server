const Profile = require("../models/Profile");
const User = require("../models/User");

exports.signupService = async (userInfo) => {
  const user = await User.create(userInfo);
  const profile = await Profile.create({ user: user._id, name: user.email });
  return user;
};

exports.loginService = async (email) => {
  const user = await User.findOne({ email });

  return user;
};
