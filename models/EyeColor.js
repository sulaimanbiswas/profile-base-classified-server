const mongoose = require("mongoose");

const eyeColorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Eye color name is required"],
    trim: true,
    unique: [true, "Eye color name must be unique"],
    lowercase: true,
  },
});

const EyeColor = mongoose.model("EyeColor", eyeColorSchema);

module.exports = EyeColor;
