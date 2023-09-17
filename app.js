const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const countryRoute = require("./routes/country.route");

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/v1/country", countryRoute);

module.exports = app;
