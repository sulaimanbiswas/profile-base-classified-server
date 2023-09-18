const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const countryRoute = require("./routes/country.route");
const stateRoute = require("./routes/state.route.js");
const cityRoute = require("./routes/city.route.js");

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/v1/country", countryRoute);
app.use("/api/v1/state", stateRoute);
app.use("/api/v1/city", cityRoute);

module.exports = app;
