const mongoose = require("mongoose");

const ganderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Gander name is required"],
    trim: true,
    unique: true,
  },
});

const Gander = mongoose.model("Gander", ganderSchema);

module.exports = Gander;
