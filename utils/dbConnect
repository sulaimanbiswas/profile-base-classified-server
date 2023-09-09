const mongoose = require("mongoose");

const DBConnect = () => {
  mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log("Database connection successful".green.bold);
  });
};

module.exports = DBConnect;
