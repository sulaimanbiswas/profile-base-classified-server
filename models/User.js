const mongoose = require("mongoose");

// Schema Design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [20, "Name can not be more than 20 characters"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: [true, "Username already exists"],
      minLength: [3, "Username can not be less than 3 characters"],
      maxLength: [20, "Username can not be more than 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: [true, "Email already exists"],
      maxLength: [50, "Email can not be more than 50 characters"],
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  {
    timestamps: true,
  }
);

// Mongoose Middleware for saving data: pre and post

// pre save middleware
userSchema.pre("save", function (next) {
  console.log("Before Saving Middleware");
  next();
});

// post save middleware
userSchema.post("save", function (doc, next) {
  console.log("After Saving Middleware");
  next();
});

// Model
const User = mongoose.model("User", userSchema);

module.exports = User;
