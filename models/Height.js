const mongoose = require("mongoose");

const heightSchema = new mongoose.Schema({
  inch: {
    type: String,
    required: [true, "Height is required"],
    trim: true,
    unique: [true, "Height must be unique"],
  },
  cm: {
    type: String,
    required: [true, "Height is required"],
    trim: true,
    unique: [true, "Height must be unique"],
  },
});

const height = mongoose.model("height", heightSchema);

module.exports = height;
