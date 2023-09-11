const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const userRouter = require("./routes/user.route");

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/v1/user", userRouter);

module.exports = app;
