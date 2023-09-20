const mongoose = require("mongoose");

const hairColorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Hair color name is required"],
    trim: true,
    unique: [true, "Hair color name must be unique"],
    lowercase: true,
  },
});

const HairColor = mongoose.model("HairColor", hairColorSchema);

module.exports = HairColor;
