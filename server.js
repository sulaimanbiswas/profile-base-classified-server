const dotenv = require("dotenv").config();
const colors = require("colors");
const DBConnect = require("./utils/dbConnect.js");

const app = require("./app");

// database connection
DBConnect();

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`.yellow.bold);
});
