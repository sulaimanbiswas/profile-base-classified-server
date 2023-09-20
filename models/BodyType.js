const mongoose = require("mongoose");

const bodyTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Body Type is required"],
    trim: true,
    unique: [true, "Body Type must be unique"],
    lowercase: true,
  },
});

const BodyType = mongoose.model("BodyType", bodyTypeSchema);

module.exports = BodyType;
