const jwt = require("jsonwebtoken");

module.exports.generateToken = (userInfo) => {
  const { _id, email, role } = userInfo;
  const token = jwt.sign({ _id, email, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};
